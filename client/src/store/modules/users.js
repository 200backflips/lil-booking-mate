const state = {
  users: [
    {
      email: 'test@test.com',
      password: 'secret',
      timePeriod: ''
    },
    {
      email: 'gitte@test.com',
      password: 'secret',
      timePeriod: ''
    }
  ],
  userInput: {
    email: '',
    password: ''
  },
  userIsLoggedIn: false,
  errorMessage: '',
  userInfo: {
    email: '',
    password: '',
    timePeriod: ''
  },
  changeEmail: false,
  changePassword: false,
  datePicked: ''
};

const getters = {
  allUsers: state => state.users,
  isLoggedIn: state => state.userIsLoggedIn,
  errorMessage: state => state.errorMessage,
  userInfo: state => state.userInfo,
  changeEmail: state => state.changeEmail,
  changePassword: state => state.changePassword
};

const regexEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
const regexDate = /^[a-z ]+[\d ]{7}/i;

const actions = {
  captureEmail({ commit }, input) {
    commit('setErrorMessage', '');
    commit('setInputEmail', input);
  },
  capturePassword({ commit }, input) {
    commit('setErrorMessage', '');
    commit('setInputPassword', input);
  },
  verifyLogIn({ commit }) {
    state.users.map(user => {
      if (
        state.userInput.email === user.email &&
        state.userInput.password === user.password
      ) {
        commit('captureUserInfo', user);
        commit('setLogIn');
      }
      commit(
        'setErrorMessage',
        'the email or password you have provided is incorrect. please try again'
      );
    });
  },
  logOut({ commit }) {
    commit('setLogOut');
  },
  toggleUserInfo({ commit }, value) {
    if (value === 'email') {
      commit('toggleEmail');
    } else if (value === 'password') {
      commit('togglePassword');
    }
  },
  updateEmail({ commit }) {
    if (regexEmail.test(state.userInput.email)) {
      state.users.map(user => {
        if (user.email === state.userInfo.email) {
          user.email = state.userInput.email;
          commit('setUserDetails', user.email);
        }
      });
      commit('toggleEmail');
    }
    commit('setErrorMessage', 'you have entered an invalid email');
  },
  updatePassword({ commit }) {
    if (state.userInput.password.length > 3) {
      state.users.map(user => {
        if (user.password === state.userInfo.password) {
          user.password = state.userInput.password;
          commit('setUserDetails', user.password);
        }
      });
      commit('togglePassword');
    }
    commit(
      'setErrorMessage',
      'your password has to be at least 3 characters long'
    );
  },
  pickDate({ commit }, date) {
    commit('setPickDate', date);
  },
  bookDate({ commit }) {
    if (state.datePicked !== '') {
      let date = state.datePicked;
      state.users.map(user => {
        if (user.email === state.userInfo.email) {
          user.timePeriod = date;
          commit('setBookDate', user);
          user.timePeriod = date.toString().match(regexDate)[0];
          commit('captureUserInfo', user);
        }
      });
    }
  },
  cancelBooking({ commit }) {
    commit('setPickDate', '');
    state.users.map(user => {
      if (user.email === state.userInfo.email) {
        user.timePeriod = '';
        commit('setBookDate', user);
        commit('captureUserInfo', user);
      }
    });
  }
};

const mutations = {
  setInputEmail: (state, input) => (state.userInput.email = input),
  setInputPassword: (state, input) => (state.userInput.password = input),
  setLogIn: state => (state.userIsLoggedIn = true),
  setLogOut: state => (state.userIsLoggedIn = false),
  setErrorMessage: (state, message) => (state.errorMessage = message),
  captureUserInfo: (state, user) => (state.userInfo = user),
  toggleEmail: state => (state.changeEmail = !state.changeEmail),
  togglePassword: state => (state.changePassword = !state.changePassword),
  setUserDetails: (state, update) => (state = { ...state, update }),
  setPickDate: (state, date) => (state.datePicked = date),
  setBookDate: (state, date) => (state = { ...state, date })
};

export default {
  state,
  getters,
  actions,
  mutations
};
