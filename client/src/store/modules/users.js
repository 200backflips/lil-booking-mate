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
  errorMessage: ''
};

const getters = {
  allUsers: state => state.users,
  isLoggedIn: state => state.userIsLoggedIn,
  errorMessage: state => state.errorMessage
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
  }
  // toggleLogIn({ commit }) {
  //   state.users.map(user => {
  //     if (
  //       state.userInput.email === user.email &&
  //       state.userInput.password === user.password
  //     ) {
  //       commit('setLogIn', user);
  //     }
  //   });
  // }
};

const mutations = {
  setInputEmail: (state, input) => (state.userInput.email = input),
  setInputPassword: (state, input) => (state.userInput.password = input),
  setLogIn: state => (state.userIsLoggedIn = true),
  setLogOut: state => (state.userIsLoggedIn = false),
  setErrorMessage: (state, message) => (state.errorMessage = message)
  // setLogIn: (state, input) =>
  //   state.users.map(user => {
  //     if (user.email === input.email) {
  //       user.isLoggedIn = !user.isLoggedIn;
  //       state = { ...state, user };
  //     }
  //   })
};

export default {
  state,
  getters,
  actions,
  mutations
};
