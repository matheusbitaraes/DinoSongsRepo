<template>
  <v-toolbar class="header" dark color="#005792">
    <v-toolbar-title class="white--text">
      <div class="logo-box">
        <img
          class="logo"
          src="../assets/logo.png"
          @click="navigateTo({name: 'home'})"
        />
      </div>
    </v-toolbar-title>
    <v-toolbar-title class="header-title" @click="navigateTo({name: 'home'})">
      Any Repo - Just store Notes!
    </v-toolbar-title>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <v-btn class="header-btn" small elevation="0" color="#005792" @click="navigateTo('register')"
        >Sign Up</v-btn
      >
      <v-btn class="header-btn" small elevation=0 color="#005792" @click="navigateTo('login')"
        >Log In</v-btn
      >
    </v-toolbar-items>
    <v-toolbar-items v-if="$store.state.isUserLoggedIn">
      <v-btn class="header-btn" small elevation=0 color="#005792" @click="navigateTo('storage')"
        >My Storage</v-btn
      >
      <h4 class="email" small elevation=0 color="#005792">{{this.$store.state.user && this.$store.state.user.email}}</h4>
      <v-btn class="header-btn" small elevation=0 color="#005792" @click="logout"
        >Sign Out</v-btn
      >
    </v-toolbar-items>

    <!-- <v-toolbar-items >
        <v-btn flat>Encontre</v-btn>
        <v-btn flat>publique</v-btn>
        <v-btn flat>sobre</v-btn>
      </v-toolbar-items> -->
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 10vh;
  position: fixed;
  top: 0;
  width: 100vw;
}

.email {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 20px;
}
.header-btn {
  margin-right:1vw;
}

.logo {
  margin-left: 1vw;
  width: 2vw;
}

.header-title {
  font-weight: bold;
  margin-right: auto;
  margin-left: 60px;
}
</style>
