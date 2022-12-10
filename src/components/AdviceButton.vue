<template>
  <div>
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
          router.push("/advice-page");
          console.log(response.data.slip.advice);
          cookies.set(`advice`, response.data.slip.advice);
        })
        .catch((error) => {
          this.userError = error;
          this.userError = alert("An error occured loading the page");
        });
    },
  },
};
</script>

<style scoped>
</style>