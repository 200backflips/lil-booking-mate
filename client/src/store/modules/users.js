const state = [
  {
    email: 'test@test.com',
    password: 'secret',
    timePeriod: { from: '', to: '' },
    hasActiveBooking: false
  },
  {
    email: 'gitte@test.com',
    password: 'secret',
    timePeriod: {
      from: new Date(2020, 5, 2),
      to: new Date(2020, 5, 8)
    },
    hasActiveBooking: true
  },
  {
    email: 'mette@test.com',
    password: 'secret',
    timePeriod: { from: '', to: '' },
    hasActiveBooking: false
  },
  {
    email: 'lasse.christensen@test.com',
    password: 'secret',
    timePeriod: {
      from: new Date(2020, 4, 12),
      to: new Date(2020, 4, 18)
    },
    hasActiveBooking: true
  },
  {
    email: 'mads@test.com',
    password: 'secret',
    timePeriod: {
      from: new Date(2020, 2, 23),
      to: new Date(2020, 2, 29)
    },
    hasActiveBooking: true
  },
  {
    email: 'sharon@test.com',
    password: 'secret',
    timePeriod: { from: '', to: '' },
    hasActiveBooking: false
  }
];

const getters = {
  allUsers: state => state
};

const mutations = {
  setUser: (state, data) => (state = { ...state, data })
};

export default {
  state,
  getters,
  mutations
};
