import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import Home from './components/Home';
import User from './components/User';
import ActiveBookings from './components/ActiveBookings';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/bookings', component: ActiveBookings },
    { path: '/user', component: User }
  ],
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
