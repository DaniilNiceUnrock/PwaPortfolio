import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    MySkills: [],
    Reviews: [],
    Requests: [],
  },
  mutations: {
    SET_MYSKILLS(state, MySkills) {
      state.MySkills = MySkills
    },
   
    SET_REVIEWS(state, Reviews) {
      state.Reviews = Reviews
    },
    SET_REQUESTS(state, Requests) {
      state.Requests = Requests
    }
  },
  actions: {
    async getMySkills({ commit }) {
      axios.get('https://rest.ponomarevdaniil.ru/api/skills')
          .then(response => {
              commit('SET_MYSKILLS', response.data);
      })
    },
    async getReviews({ commit }) {
      axios.get('https://rest.ponomarevdaniil.ru/api/rewiews/true')
          .then(response => {
              commit('SET_REVIEWS', response.data)
      })
    },
    async addReview({commit}, newReview) {

      console.log(newReview);
      try {
          const { data } = await axios.post('https://rest.ponomarevdaniil.ru/api/rewiews', newReview);
          //commit('ADD_REVIEW', newReview);                
      } catch (err) {
          //commit('ADD_REVIEW', err)
      }
  },
    async getRequests({ commit }) {
      axios.get('https://rest.ponomarevdaniil.ru/api/request')
          .then(response => {
              commit('SET_REQUESTS', response.data)
      })
    },
  },
  getters: {
  },
  modules: {
  }
})
