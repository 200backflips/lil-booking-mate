const state = {
  email: '',
  password: ''
};

const actions = {
  captureEmail({ commit }, input) {
    commit('setErrorMessage', '');
    commit('setInputEmail', input);
  },
  capturePassword({ commit }, input) {
    commit('setErrorMessage', '');
    commit('setInputPassword', input);
  }
};

const mutations = {
  setInputEmail: (state, input) => (state.email = input),
  setInputPassword: (state, input) => (state.password = input)
};

export default {
  state,
  actions,
  mutations
};
