<template>
    <v-toolbar class="header" dark color="#005792">
      <v-toolbar-title class="white--text">
        <div class="logo-box">
          <img class="logo" src="../assets/logo.png">
        </div>
      </v-toolbar-title>
      <v-toolbar-title class="header-title">
          Dinos Songs Tabs
      </v-toolbar-title>

      <!-- <v-toolbar-items >
        <v-btn flat>Encontre</v-btn>
        <v-btn flat>publique</v-btn>
        <v-btn flat>sobre</v-btn>
      </v-toolbar-items> -->
    </v-toolbar>
</template>

<script>
export default {}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.header {
    height: 10vh;
    position: fixed;
    top: 0;
    width: 100vw;
}

.logo {
    margin-left: 1vw;
    width: 2vw;
}

.header-title{
    font-weight: bold;
    margin: auto;
}
</style>
