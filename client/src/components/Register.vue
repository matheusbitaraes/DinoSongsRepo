<template>
  <div class="register-box">
    <v-toolbar flat dense dark>
      <v-toolbar-title>Register Here!</v-toolbar-title>
    </v-toolbar>
    <div class="inputs">
      <input 
      type="text" 
      name="email" 
      v-model="email" 
      placeholder="email" />
      <br />
      <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
      />
      <br />
      <div class="error-msg" v-html="error"></div>
    </div>
      <v-btn class="register-button" @click="register">Register</v-btn>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      msg: "Make your registration",
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        console.log(response)
        this.$alert(`Account for e-mail ${this.email} registed with success!`, "Success", "success");
      } catch (error) {

        this.$alert(`${error.response.data.error}`, "Error", "warning");
        // this.error = ;
      }
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.error-msg {
  color: red;
}
.register-box {
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.inputs{
  margin-top: 20px;
}
.inputs > input {
  margin-bottom: 20px;
}
</style>
