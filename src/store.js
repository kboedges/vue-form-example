import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "Katie",
      age: 28,
      pets: ["Marcus", "Fleur", "Leah"],
      car: "Ford"
    },
    color: "#eeeeee"
  },
  mutations: {
    saveName(state, payload) {
      state.user.name = payload;
    },
    saveColor(state, payload) {
      state.color = payload;
    }
  },
  actions: {},
  plugins: [createPersistedState()]
});
