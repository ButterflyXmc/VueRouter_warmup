<template>
  <div>
    <h1>Home page</h1>
    <!-- 3.sAdding the advice button on this page by adding the component itself -->
    <AdviceButton />
  </div>
</template>

<script>
//1. import the button
import AdviceButton from "@/components/AdviceButton.vue";

export default {
  name: "HomePage",
  components: {
    //2.
    AdviceButton,
  },
};
// After creating the view, declare it in the router filer (index.js)
// added the button on this page
</script>

<style scoped>
</style>