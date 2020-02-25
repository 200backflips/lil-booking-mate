const state = {
  users: [
    {
      id: 1,
      name: 'dis guy'
    },
    {
      id: 2,
      name: 'dat guy'
    },
    {
      id: 3,
      name: 'other guy'
    }
  ]
};

const getters = {
  allUsers: state => state.users
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
