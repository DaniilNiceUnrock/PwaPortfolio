import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    MySkills: [],
    Reviews: [],
  },
  mutations: {
    SET_MYSKILLS(state, MySkills) {
      state.MySkills = MySkills
    },
    SET_REVIEWS(state, Reviews) {
      state.Reviews = Reviews
    }
  },
  actions: {
    async getMySkills({ commit }) {
      axios.get('https://rest.ponomarevdaniil.fun/api/skills')
          .then(response => {
              commit('SET_MYSKILLS', response.data);
      })
    },
    async getReviews({ commit }) {
      axios.get('https://rest.ponomarevdaniil.fun/api/rewiews')
          .then(response => {
              commit('SET_REVIEWS', response.data)
      })
    },
  },
  getters: {
  },
  modules: {
  }
})
