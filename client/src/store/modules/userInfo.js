const state = {
  info: {
    email: '',
    password: '',
    timePeriod: { from: '', to: '' },
    hasActiveBooking: false
  }
};

const getters = {
  userInfo: state => state.info,
  hasActiveBooking: state => state.info.hasActiveBooking
};

const mutations = {
  captureUserInfo: (state, user) => (state.info = user),
  setActiveBooking: state => (state.hasActiveBooking = !state.hasActiveBooking)
};

export default {
  state,
  getters,
  mutations
};
