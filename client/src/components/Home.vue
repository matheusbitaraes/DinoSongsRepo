<template>
  <div class="hello">
    <h1> Welcome to Any Repo! </h1>
    <br>
    <h2> Just make your registration and start storing!  </h2>
    <br>
    <br>
    <p> This is a toy project using vue.js, node, expressjs and postgres. On Any Repo you can store anything you want
       (as long it is text, urls and whatever i would like to implement)!</p>
    <img class="image" src="../assets/storage.png">
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello > h1 {
  margin-top: 15vh;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.image {
  margin-top: 5vh;
  height: 60vh;
}
</style>
