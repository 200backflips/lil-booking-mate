import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import userInput from './modules/userInput';
import userInfo from './modules/userInfo';
import dates from './modules/dates';
import error from './modules/error';
import booking from './modules/booking';
import login from './modules/login';
import update from './modules/update';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    userInput,
    userInfo,
    login,
    update,
    dates,
    error,
    booking
  }
});
