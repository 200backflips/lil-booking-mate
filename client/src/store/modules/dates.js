const state = {
  from: '',
  to: '',
  bookable: true,
  picker: true
};

const getters = {
  fromDate: state => state.from,
  toDate: state => state.to,
  picker: state => state.picker
};

const actions = {
  validator({ commit, rootState }, date) {
    rootState.users.map(user => {
      if (user.hasActiveBooking) {
        if (state.picker) {
          if (
            user.timePeriod.from - date.setHours(0, 0, 0, 0) == 86400000 ||
            user.timePeriod.from - date.setHours(0, 0, 0, 0) == 172800000
          ) {
            commit('setBookable', false);
          }
        } else {
          if (
            date.setHours(0, 0, 0, 0) - user.timePeriod.to == 0 ||
            date.setHours(0, 0, 0, 0) - user.timePeriod.to == 82800000 ||
            date.setHours(0, 0, 0, 0) - user.timePeriod.to == 169200000
          ) {
            commit('setBookable', false);
          }
        }
      }
    });
  },
  pickDates({ dispatch, commit, rootState }, date) {
    if (!rootState.userInfo.info.hasActiveBooking) {
      dispatch('validator', date);
      if (state.bookable && state.picker) {
        commit('setFromDate', date);
        commit('setPicker');
      } else if (state.bookable && !state.picker) {
        commit('setToDate', date);
        commit('setPicker');
      }
    }
    commit('setBookable', true);
  }
};

const mutations = {
  setFromDate: (state, date) => (state.from = date),
  setToDate: (state, date) => (state.to = date),
  setPicker: state => (state.picker = !state.picker),
  setBookable: (state, value) => (state.bookable = value)
};

export default {
  state,
  getters,
  actions,
  mutations
};
