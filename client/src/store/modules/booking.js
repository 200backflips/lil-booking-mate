const regexDate = /^[a-z ]+[\d ]{7}/i;

const state = {
  hasActiveBooking: false,
  showModal: false,
  bookingIsCancelled: false
};

const getters = {
  showModal: state => state.showModal,
  hasActiveBooking: state => state.hasActiveBooking,
  bookingIsCancelled: state => state.bookingIsCancelled
};

const actions = {
  bookDates(context) {
    const commit = context.commit;
    const state = context.rootState;
    if (state.dates.from && state.dates.to) {
      let dateFrom = state.dates.from;
      let dateTo = state.dates.to;
      state.users.map(user => {
        if (user.email === state.userInfo.info.email) {
          user.timePeriod.from = dateFrom;
          user.timePeriod.to = dateTo;
          commit('setDates', user);
          user.timePeriod.from = dateFrom.toString().match(regexDate)[0];
          user.timePeriod.to = dateTo.toString().match(regexDate)[0];
          commit('captureUserInfo', user);
          commit('setActiveBooking');
          commit('setModal');
          setTimeout(() => commit('setModal'), 4000);
        }
      });
    }
  },
  cancelBooking(context) {
    const commit = context.commit;
    const state = context.rootState;
    commit('setFromDate', '');
    commit('setToDate', '');
    state.users.map(user => {
      if (user.email === state.userInfo.info.email) {
        user.timePeriod = { from: '', to: '' };
        commit('setDates', user);
        commit('captureUserInfo', user);
        commit('setActiveBooking');
        commit('setCancelled');
        commit('setModal');
        setTimeout(() => commit('setModal'), 4000);
      }
    });
  }
};

const mutations = {
  setDates: (state, date) => (state = { ...state, date }),
  setModal: state => (state.showModal = !state.showModal),
  setCancelled: state => (state.bookingIsCancelled = !state.bookingIsCancelled),
  setActiveBooking: state => (state.hasActiveBooking = !state.hasActiveBooking)
};

export default { state, getters, actions, mutations };
