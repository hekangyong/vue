<template>
  <div id="app">
    <TopNavbar/>
    <!-- <router-link to="/TokenDis">About</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TopNavbar from "./components/TopNavbar/TopNavbar";
// import Index from "./components/Index/Index";


export default {
  name: "app",
  components: {
    TopNavbar,
    // Index
  }
};
</script>

<style>
</style>
