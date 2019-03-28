<template>
  <div class="index">
    <Carousel/>
    <div class="about-us">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="about-us-content">
              <div class="about-us-title">
                <h4>about something</h4>
                <h2>
                  It's Out
                  <span>Honour,</span>To
                  <br>Be
                  <span>With</span> You
                </h2>
              </div>
              <p>There are many variations of passages of electronics Services, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. by injected humour, or randomised words which don't look even</p>
              <p>There are many variations of passages of electronics repair, but the majority have suffered alteration in some form, by injected humour, or randomised words duskam azer which don't look</p>
              <a href="javascript:void(0)" class="abous-us-more">discover more</a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="about-us-img">
              <img src="../../assets/images/about-02.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="provide">
      <div class="container">
        <div class="row"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel/Carousel";

export default {
  name: "Index",
  components: {
    Carousel
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
@import "../../assets/css/material-icons.css";
</style>


