import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/app-title/Header.vue';
import Tabs from './components/app-tabs/Tabs.vue';
import router from './router.js';
import APlayer from 'vue-aplayer';

Vue.config.productionTip = false;
Vue.component('bandori-tabs', Tabs);
Vue.component('bandori-header', Header);

new Vue({
  router,
  components: {
    APlayer
  },
  render: h => h(App),
}).$mount('#app');
