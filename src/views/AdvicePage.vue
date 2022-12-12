<template>
  <!-- views can only be imported in router -->
  <div>
    <!-- 1.  a link for the user to click on this -->
    <router-link to="/">Home page</router-link>
    <h1>Advice page</h1>
    <!--2. injecting  a variable-->
    <p>{{ adviceString }}</p>
  </div>
</template>

<script>
import cookies from "vue-cookies";

export default {
  name: "AdvicePage",
  data() {
    return {
      // 3.
      adviceString: "",
    };
  },
  //1. Logically the most sensible place to put our loading of the cookies and injecting it on the page is under methods;
  methods: {
    //2. displayAdvice fucntion is gonna get the cookie from advicePage
    displayAdvice() {
      //3. setting a Variable that =  to getting the cookie from the advicepage and printing it in the empty string
      let advice = cookies.get(`advice`);
      //4. if the an issue occurs loading the cookie
      if (advice == undefined) {
        //5. then display an error msg
        this.adviceString = "Error: no advice found";
        //6. or else, display the advice (the variable getting the cookie)
      } else {
        this.adviceString = advice;
      }
    },
  },
  //7. then call the function in mounted;
  // as soon as the page loads, run the function
  mounted() {
    this.displayAdvice();
  },
};
</script>

<style scoped>
</style>