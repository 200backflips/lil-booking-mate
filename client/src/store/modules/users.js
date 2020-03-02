const state = [
  {
    email: 'test@test.com',
    password: 'secret',
    timePeriod: { from: '', to: '' }
  },
  {
    email: 'gitte@test.com',
    password: 'secret',
    timePeriod: { from: '', to: '' }
  },
  {
    email: 'mette@test.com',
    password: 'secret',
    timePeriod: { from: '', to: '' }
  },
  {
    email: 'lasse.christensen@test.com',
    password: 'secret',
    timePeriod: { from: '', to: '' }
  },
  {
    email: 'mads@test.com',
    password: 'secret',
    timePeriod: { from: '', to: '' }
  }
];

const getters = {
  allUsers: state => state
};

export default {
  state,
  getters
};
