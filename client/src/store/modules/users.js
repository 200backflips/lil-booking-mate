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
  userInfo: {},
  changeEmail: false,
  changePassword: false
};

const getters = {
  allUsers: state => state.users,
  isLoggedIn: state => state.userIsLoggedIn,
  errorMessage: state => state.errorMessage,
  userInfo: state => state.userInfo,
  changeEmail: state => state.changeEmail,
  changePassword: state => state.changePassword
};

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
    state.users.map(user => {
      if (user.email === state.userInfo.email) {
        user.email = state.userInput.email;
        commit('setUserDetails', user.email);
      }
    });
    commit('toggleEmail');
  },
  updatePassword({ commit }) {
    state.users.map(user => {
      if (user.password === state.userInfo.password) {
        user.password = state.userInput.password;
        commit('setUserDetails', user.password);
      }
    });
    commit('togglePassword');
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
  setUserDetails: (state, update) => (state = { ...state, update })
};

export default {
  state,
  getters,
  actions,
  mutations
};
