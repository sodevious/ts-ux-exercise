import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formOpen: false,
    formSubmitted: false
  },
  mutations: {
    openForm: state => state.formOpen = true,
    closeForm: state => state.formOpen = false,
    submitForm (state) {
      state.formSubmitted = true,
      state.formOpen = false
    }
  }
});
