const state = { isLoggedIn: false };

const getters = {
  isLoggedIn: state => state.isLoggedIn
};

const actions = {
  verifyLogIn(context) {
    const commit = context.commit;
    const state = context.rootState;
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
  }
};

const mutations = {
  setLogIn: state => (state.isLoggedIn = true),
  setLogOut: state => (state.isLoggedIn = false)
};

export default {
  state,
  getters,
  actions,
  mutations
};
