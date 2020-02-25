import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import BookingForm from './components/BookingForm';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [{ path: '/', component: BookingForm }],
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
