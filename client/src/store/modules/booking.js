const regexDate = /^[a-z ]+[\d ]{7}/i;

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
      }
    });
  }
};

const mutations = {
  setDates: (state, date) => (state = { ...state, date })
};

export default { actions, mutations };
