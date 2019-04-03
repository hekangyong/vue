<template>
  <div class="topNavbar">
    <nav class="navbar navbar-expand-lg navbar-light nav-back">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../../assets/images/logo-1.png" alt class="logo-img">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse top-Nav-p" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-for="tab in items" :key="tab.id">
              <!-- v-on:mouseover="tabshow(tab.text)"
              v-on:mouseout="out(tab.text)"-->
              <a class="nav-link" @click="toPage(tab.text)">{{ tab.text }}</a>
              <ul class="small-tab" v-if="tab.tabtext">
                <li class="small-nav-item" v-for="(small,index) in tab.tabtext" :key="index">
                  <a href="#" class="small-nav-link">{{ small.tabText }}</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 form-pre">
            <input class="form-control mr-sm-2 input-style" type="search" aria-label="Search">
            <i class="material-icons">search</i>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TopNavbar",
  data() {
    return {
      items: [
        {
          text: "Home",
          tabtext: [
            { tabText: "Home1" },
            { tabText: "Home2" },
            { tabText: "Home3" }
          ]
        },
        {
          text: "Listing",
          tabtext: [
            { tabText: "About" },
            { tabText: "Gallery" },
            { tabText: "Team" }
          ]
        },
        {
          text: "Services"
        },
        {
          text: "Event&Blog",
          tabtext: [
            { tabText: "Blog" },
            { tabText: "Blog Details" },
            { tabText: "Event" }
          ]
        },
        {
          text: "Contact"
        }
      ]
    };
  },
  methods: {
    toPage: function(a) {
      var url = a;
      this.$router.push({
        path: url
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
@import "../../assets/css/material-icons.css";
</style>


