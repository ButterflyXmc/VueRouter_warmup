<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
// import AdviceButton from "@/components/AdviceButton.vue";

export default {
  components: {
    // AdviceButton,
  },
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;
  margin: 7px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
