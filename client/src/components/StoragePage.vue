<template>
  <v-layout v-if="$store.state.isUserLoggedIn" class='storage-box'>
    <h2>Your Records</h2>
      <v-data-table
      dense
      :headers="headers"
      :items="notes"
      item-key="name"
      class="elevation-1"
      ></v-data-table>
      <v-btn class="record-button" @click="navigateTo({name: 'new'})"> New Record </v-btn>
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
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Title',
          align: 'title',
          sortable: true,
          value: 'title'
        },
        { text: 'Created At', value: 'createdAt' },
        { text: 'Updated At', value: 'updatedAt' },
        { text: 'Url', value: 'url' }
      ],
      notes: [
      ],
      error: null
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
