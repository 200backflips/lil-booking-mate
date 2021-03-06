const state = {
  showModal: false
};

const getters = {
  showModal: state => state.showModal,
  bookingIsCancelled: state => state.bookingIsCancelled
};

const actions = {
  bookDates({ dispatch, commit, rootState }) {
    if (rootState.dates.from && rootState.dates.to) {
      let dateFrom = rootState.dates.from;
      let dateTo = rootState.dates.to;
      rootState.users.map(user => {
        if (user.email === rootState.userInfo.info.email) {
          user.hasActiveBooking = !user.hasActiveBooking;
          commit('setUser', user);
          user.timePeriod.from = dateFrom;
          user.timePeriod.to = dateTo;
          commit('setDates', user);
          commit('captureUserInfo', user);
          commit('setActiveBooking');
          dispatch('showModal');
        }
      });
    }
  },
  cancelBooking({ dispatch, commit, rootState }) {
    commit('setFromDate', '');
    commit('setToDate', '');
    rootState.users.map(user => {
      if (user.email === rootState.userInfo.info.email) {
        user.hasActiveBooking = !user.hasActiveBooking;
        commit('setUser', user);
        user.timePeriod = { from: '', to: '' };
        commit('setDates', user);
        commit('captureUserInfo', user);
        commit('setActiveBooking');
        dispatch('showModal');
      }
    });
  },
  showModal({ commit, rootState }) {
    commit('setModal');
    setTimeout(
      () => commit('setModal'),
      rootState.userInfo.hasActiveBooking ? 2500 : 1500
    );
  }
};

const mutations = {
  setDates: (state, date) => (state = { ...state, date }),
  setModal: state => (state.showModal = !state.showModal)
};

export default {
  state,
  getters,
  actions,
  mutations
};
