import Vue from 'vue'
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import VueMDCAdapter from 'vue-mdc-adapter';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'

Vue.use(VueMDCAdapter)

window.jQuery = $;
window.$ = $;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  VueAwesomeSwiper
}).$mount('#app')
