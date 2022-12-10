<template>
  <!-- views can only be imported in router -->
  <div>
    <router-link to="/">Home page</router-link>
    <h1>Advice page</h1>
    <p>{{ adviceString }}</p>
  </div>
</template>

<script>
import cookies from "vue-cookies";

export default {
  name: "AdvicePage",
  data() {
    return {
      adviceString: "",
    };
  },
  methods: {
    displayAdvice() {
      // getting the cookie from the advicepage and printing it in the empty string
      let adviceString = cookies.get(`advice`);
      if (adviceString == undefined) {
        this.adviceString = "Error: no advice found";
      } else {
        this.adviceString = adviceString;
      }
    },
  },
  mounted() {
    this.displayAdvice();
  },
};
</script>

<style scoped>
a {
}
</style>