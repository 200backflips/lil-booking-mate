const state = {
  from: '',
  to: '',
  picker: true
};

const getters = {
  fromDate: state => state.from,
  toDate: state => state.to,
  picker: state => state.picker
};

const actions = {
  pickDates({ commit, rootState }, date) {
    if (!rootState.userInfo.info.hasActiveBooking) {
      if (state.picker) {
        commit('setFromDate', date);
        commit('setPicker');
      } else {
        commit('setToDate', date);
        commit('setPicker');
      }
    }
  }
};

const mutations = {
  setFromDate: (state, date) => (state.from = date),
  setToDate: (state, date) => (state.to = date),
  setPicker: state => (state.picker = !state.picker)
};

export default {
  state,
  getters,
  actions,
  mutations
};
