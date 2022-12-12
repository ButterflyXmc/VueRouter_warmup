<template>
  <div>
    <!-- we want display this Advicebutton to display on the home page (under views) -->
    <!-- so go to home page and add the component on that page -->
    <!-- then come back here and do this -->

    <!-- 4. -->
    <button @click="getAdvice">Advice</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import router from "@/router";

export default {
  name: "AdviceButton",
  data() {
    return {
      // 2.
      userError: "",
    };
  },
  methods: {
    getAdvice() {
      axios
        .request({
          url: "https://api.adviceslip.com/advice",
          method: "GET",
        })
        .then((response) => {
          //3. sending the user to the advice page with the path I declared for the advice page in the router
          router.push("/advice-page");
          //1. setting the response from the api in a cookie for later use
          cookies.set(`advice`, response.data.slip.advice);
        })
        .catch((error) => {
          //2. showing the user an error msg if the api doesn't work
          this.userError = error;
          this.userError = alert("An error occured loading the page");
        });
    },
  },
};
</script>

<style scoped>
</style>