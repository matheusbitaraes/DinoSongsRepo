<template>
  <v-layout class='storage-box'>
    <h2>Your Records</h2>
      <v-data-table
      dense
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
      ></v-data-table>
      <v-btn class="record-button"> New Record </v-btn>
  </v-layout>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      headers: [
        {
          text: 'Date',
          align: 'start',
          sortable: true,
          value: 'name'
        },
        { text: 'Type', value: 'type' }
      ],
      data: [],
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$alert(`Account for e-mail ${this.email} authenticated with success!`, 'Success', 'success')
        this.$router.push({name: 'home'})
      } catch (error) {
        this.$alert(`${error.response.data.error}`, 'Error', 'error')
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.error-msg {
  color: red;
}
.storage-box {
  margin-top: 4vw;
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
