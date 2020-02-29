const state = { message: '' };

const getters = {
  errorMessage: state => state.message
};

const mutations = {
  setErrorMessage: (state, message) => (state.message = message)
};

export default {
  state,
  getters,
  mutations
};
