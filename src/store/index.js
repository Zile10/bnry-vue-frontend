import { createStore } from 'vuex';
import axios from "axios";
const apiUrl = "http://localhost:6969/"

export default createStore({
  state: {
    article: null,
    articles: null,
  },
  mutations: {
    setArticles(state, data) {
      state.articles = data;
    },
  },
  actions: {
    // Products
    async fetchArticles(context) {
      const res = await axios.get(`${apiUrl}`);
      const data = await res.data
      context.commit("setArticles", data)
    },
  }
})