<template>
  <v-toolbar class="header" dark color="#005792">
    <v-toolbar-title class="white--text">
      <div class="logo-box">
        <img
          class="logo"
          src="../assets/logo.png"
          @click="navigateTo('home')"
        />
      </div>
    </v-toolbar-title>
    <v-toolbar-title class="header-title" @click="navigateTo('home')">
      Any Repo - Just store things!
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn class="header-btn" small elevation="0" color="#005792" @click="navigateTo('register')"
        >Sign Up</v-btn
      >
      <v-btn class="header-btn" small elevation=0 color="#005792" @click="navigateTo('login')"
        >Sign In</v-btn
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

.header-btn {
  margin-right:1vw;
}

.logo {
  margin-left: 1vw;
  width: 2vw;
}

.header-title {
  font-weight: bold;
  margin: auto;
}
</style>
