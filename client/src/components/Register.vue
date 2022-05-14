<template>
  <v-layout class='register-box'>
    <v-toolbar class="register-toolbar" dark color="#005792">
      <v-toolbar-title>Register Here!</v-toolbar-title>
    </v-toolbar>
    <form class='inputs'>
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
    <v-btn class='register-button' @click='register'>Register</v-btn>
  </v-layout>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Make your registration',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$alert(`Account for e-mail ${this.email} registed with success!`, 'Success', 'success')
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
.register-box {
  margin-top: 10vw;
  margin-left: auto;
  margin-right: auto;
  width: 50vw;
  /* height: 10vw; */
  display: flex;
  flex-direction: column;
}

.register-toolbar{
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

.register-button{
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
}
</style>
