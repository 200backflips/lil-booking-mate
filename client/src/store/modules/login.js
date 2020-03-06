const state = { isLoggedIn: false };

const getters = {
  isLoggedIn: state => state.isLoggedIn
};

const actions = {
  verifyLogIn({ commit, rootState }) {
    rootState.users.map(user => {
      if (
        rootState.userInput.email.toLowerCase() === user.email.toLowerCase() &&
        rootState.userInput.password === user.password
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
    commit('setFromDate', '');
    commit('setToDate', '');
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
