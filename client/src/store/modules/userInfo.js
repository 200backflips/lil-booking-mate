const state = {
  info: {
    email: '',
    password: '',
    timePeriod: { from: '', to: '' }
  }
};

const getters = {
  userInfo: state => state.info
};

const mutations = {
  captureUserInfo: (state, user) => (state.info = user)
};

export default {
  state,
  getters,
  mutations
};
