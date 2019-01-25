import Vue from 'vue';
window.Vue = Vue;
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/app-title/Header.vue';
import Tabs from './components/app-tabs/Tabs.vue';

Vue.config.productionTip = false;
Vue.component('bandori-tabs', Tabs);
Vue.component('bandori-header', Header);

new Vue({
  render: h => h(App),
}).$mount('#app');
