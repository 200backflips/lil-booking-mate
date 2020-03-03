const state = {
  changeEmail: false,
  changePassword: false
};

const getters = {
  changeEmail: state => state.changeEmail,
  changePassword: state => state.changePassword
};

const regexEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

const actions = {
  toggleUserInfo({ commit }, value) {
    if (value === 'email') {
      commit('toggleEmail');
    } else if (value === 'password') {
      commit('togglePassword');
    }
  },
  updateEmail({ commit, rootState }) {
    if (regexEmail.test(rootState.userInput.email)) {
      rootState.users.map(user => {
        if (user.email === rootState.userInfo.info.email) {
          user.email = rootState.userInput.email;
          commit('setUserDetails', user.email);
          commit('captureUserInfo', user);
        }
      });
      commit('toggleEmail');
    }
    commit('setErrorMessage', 'you have entered an invalid email');
  },
  updatePassword({ commit, rootState }) {
    if (rootState.userInput.password.length > 3) {
      rootState.users.map(user => {
        if (user.password === rootState.userInfo.info.password) {
          user.password = rootState.userInput.password;
          commit('setUserDetails', user.password);
          commit('captureUserInfo', user);
        }
      });
      commit('togglePassword');
    }
    commit(
      'setErrorMessage',
      'your password has to be at least 3 characters long'
    );
  }
};

const mutations = {
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
