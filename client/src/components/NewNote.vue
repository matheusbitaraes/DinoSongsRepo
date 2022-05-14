<template>
  <v-layout v-if="$store.state.isUserLoggedIn" class='storage-box'>
    <h2>New Note</h2>
    <form>
    <v-text-field
      label="Title"
      required
      hide-details="auto"
      v-model='title'
    ></v-text-field>
    <v-text-field label="Url" v-model='url'></v-text-field>
    <v-textarea v-model='content' class="content-input" placeholder="Be Creative" filled outlined auto-grow></v-textarea>
    </form>
    <v-btn class="record-button" @click="save"> Save </v-btn>

  </v-layout>
  <v-layout v-else class='storage-box'>
    <h2>Please Register or Login</h2>
  </v-layout>
</template>

<script>
import StorageService from '../services/StorageService'

export default {
  name: 'Login',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async save () {
      try {
        await StorageService.post({
          title: this.title,
          url: this.url,
          content: this.content,
          id: this.$store.state.user.id
        })
        this.$alert(`Note saved!`, 'Success', 'success')
        this.$router.push({name: 'storage'})
      } catch (error) {
        this.$alert(`${error.response.data.error}`, 'Error', 'error')
      }
    }
  },
  data () {
    return {
      title: null,
      url: null,
      content: null
    }
  },
  async mounted () {
    const response = await StorageService.getAll(this.$store.state.user)
    this.notes = response.data
  }
}

</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.error-msg {
  color: red;
}
.storage-box {
  margin-top: 6vw;
  margin-left: auto;
  margin-right: auto;
  width: 50vw;
  /* height: 10vw; */
  display: flex;
  flex-direction: column;
}

.record-button {
  width: 30vw;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>
