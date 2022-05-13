<template>
  <v-layout class='login-box'>
    <v-toolbar class="login-toolbar" dark color="#005792">
      <v-toolbar-title>Login Here!</v-toolbar-title>
    </v-toolbar>
    <div class='inputs'>
      <v-text-field
        class="email-input"
        label='E-mail'
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
    </div>
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
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$alert(`Account for e-mail ${this.email} authenticated with success!`, 'Success', 'success')
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
