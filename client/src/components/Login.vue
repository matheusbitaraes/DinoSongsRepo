<template>
  <v-layout class='login-box'>
    <v-toolbar class="login-toolbar" dark color="#005792">
      <v-toolbar-title>Login Here!</v-toolbar-title>
    </v-toolbar>
    <form class='inputs' autocomplete="on">
      <v-text-field
        class="email-input"
        label='Email'
        type='email'
        v-model='email'
      />
      <v-text-field
        class="pwd-input"
        label='Password'
        type='password'
        v-model='password'
      />
      <br />
      <div class='error-msg' v-html='error'></div>
    </form>
    <v-btn class='login-button' @click='login'>Login</v-btn>
  </v-layout>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
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
.login-box {
  margin-top: 10vw;
  margin-left: auto;
  margin-right: auto;
  width: 50vw;
  /* height: 10vw; */
  display: flex;
  flex-direction: column;
}

.login-toolbar{
  height: 2vh;
}

.inputs {
  width: 30vw;
  margin: auto;
}
.pwd-input{
  margin-bottom: 20px;
}
.email-input {
  margin-top: 20px;
  margin-bottom: 20px;
}
.email-input > label {
  right: unset;
  left: 0;
}

.login-button{
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
}
</style>
