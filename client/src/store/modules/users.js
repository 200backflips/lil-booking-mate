const state = {
  userIsLoggedIn: false,
  users: [
    {
      email: 'test@test.com',
      password: 'secret',
      hasBooking: false
    },
    {
      email: 'gitte@test.com',
      password: 'secret',
      hasBooking: false
    }
  ],
  userInput: {
    email: '',
    password: ''
  }
};

const getters = {
  allUsers: state => state.users,
  isLoggedIn: state => state.userIsLoggedIn
};

const actions = {
  captureEmail({ commit }, input) {
    commit('setInputEmail', input);
  },
  capturePassword({ commit }, input) {
    commit('setInputPassword', input);
  },
  toggleLogIn({ commit }) {
    state.users.map(user => {
      if (
        state.userInput.email === user.email &&
        state.userInput.password === user.password
      ) {
        console.log(state.userIsLoggedIn);
        commit('setLogIn');
        console.log(state.userIsLoggedIn);
      }
    });
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
  setLogIn: state => (state.userIsLoggedIn = true)
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
