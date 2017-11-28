import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    logged_user: {},
    next_route: null,
  },
  mutations: {
    SET_LOGGED_USER(state, logged_user){
      state.logged_user = logged_user;
    },
    SET_NEXT_ROUTE(state, route) {
      state.next_route = route !== null ? route : null;
    },
  },
  getters: {
    logged_user(state){
      return state.logged_user;
    },
    next_route(state) {
      return state.next_route;
    },
  }
})

export default store
