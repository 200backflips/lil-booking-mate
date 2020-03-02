const regexDate = /^[a-z ]+[\d ]{7}/i;

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
        if (user.hasActiveBooking) {
          user.timePeriod.from = user.timePeriod.from
            .toString()
            .match(regexDate)[0];
          user.timePeriod.to = user.timePeriod.to
            .toString()
            .match(regexDate)[0];
        }
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
