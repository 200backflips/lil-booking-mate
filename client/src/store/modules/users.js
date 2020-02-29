const state = {
  users: [
    {
      email: 'test@test.com',
      password: 'secret',
      timePeriod: { from: '', to: '' }
    },
    {
      email: 'gitte@test.com',
      password: 'secret',
      timePeriod: { from: '', to: '' }
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
    timePeriod: { from: '', to: '' }
  },
  changeEmail: false,
  changePassword: false,
  datesPicked: { from: '', to: '' }
};

const getters = {
  allUsers: state => state.users,
  isLoggedIn: state => state.userIsLoggedIn,
  errorMessage: state => state.errorMessage,
  userInfo: state => state.userInfo,
  changeEmail: state => state.changeEmail,
  changePassword: state => state.changePassword,
  datesPicked: state => state.datesPicked
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
  pickDates({ commit }, date) {
    if (state.datesPicked.from === '' && state.datesPicked.to === '') {
      commit('setFromDate', date);
    } else if (date < state.datesPicked.from) {
      commit('setFromDate', date);
    } else if (date > state.datesPicked.from && date <= state.datesPicked.to) {
      commit('setFromDate', date);
    } else {
      commit('setToDate', date);
    }
  },
  bookDates({ commit }) {
    if (state.datesPicked.from && state.datesPicked.to) {
      let dateFrom = state.datesPicked.from;
      let dateTo = state.datesPicked.to;
      state.users.map(user => {
        if (user.email === state.userInfo.email) {
          user.timePeriod.from = dateFrom;
          user.timePeriod.to = dateTo;
          commit('setBookDates', user);
          user.timePeriod.from = dateFrom.toString().match(regexDate)[0];
          user.timePeriod.to = dateTo.toString().match(regexDate)[0];
          commit('captureUserInfo', user);
        }
      });
    }
  },
  cancelBooking({ commit }) {
    commit('setFromDate', '');
    commit('setToDate', '');
    state.users.map(user => {
      if (user.email === state.userInfo.email) {
        user.timePeriod = { from: '', to: '' };
        commit('setBookDates', user);
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
  setFromDate: (state, date) => (state.datesPicked.from = date),
  setToDate: (state, date) => (state.datesPicked.to = date),
  setBookDates: (state, date) => (state = { ...state, date })
};

export default {
  state,
  getters,
  actions,
  mutations
};
