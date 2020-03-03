const regexDate = /^[a-z ]+[\d ]{7}/i;

const state = {
  hasActiveBooking: false,
  showModal: false
};

const getters = {
  showModal: state => state.showModal,
  hasActiveBooking: state => state.hasActiveBooking,
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
          user.timePeriod.from = dateFrom.toString().match(regexDate)[0];
          user.timePeriod.to = dateTo.toString().match(regexDate)[0];
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
  showModal({ commit }) {
    commit('setModal');
    setTimeout(() => commit('setModal'), 4000);
  }
};

const mutations = {
  setDates: (state, date) => (state = { ...state, date }),
  setModal: state => (state.showModal = !state.showModal),
  setActiveBooking: state => (state.hasActiveBooking = !state.hasActiveBooking)
};

export default { state, getters, actions, mutations };
