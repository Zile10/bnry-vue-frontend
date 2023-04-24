import { createStore } from 'vuex';
import axios from "axios";
const apiUrl = "https://bnry-newsapi-api.onrender.com/"

const placeholderArticles = [
  {
    urlToImage: "https://i.postimg.cc/Hk7TQLGB/placeholder-image-better-removebg-preview.png",
    title: "Article Title",
    description: "Article Description",
  },
  {
    urlToImage: "https://i.postimg.cc/Hk7TQLGB/placeholder-image-better-removebg-preview.png",
    title: "Article Title",
    description: "Article Description",
  },
  {
    urlToImage: "https://i.postimg.cc/Hk7TQLGB/placeholder-image-better-removebg-preview.png",
    title: "Article Title",
    description: "Article Description",
  },
  {
    urlToImage: "https://i.postimg.cc/Hk7TQLGB/placeholder-image-better-removebg-preview.png",
    title: "Article Title",
    description: "Article Description",
  },
  {
    urlToImage: "https://i.postimg.cc/Hk7TQLGB/placeholder-image-better-removebg-preview.png",
    title: "Article Title",
    description: "Article Description",
  },
  {
    urlToImage: "https://i.postimg.cc/Hk7TQLGB/placeholder-image-better-removebg-preview.png",
    title: "Article Title",
    description: "Article Description",
  },
]

export default createStore({
  state: {
    baseArticles: placeholderArticles,
    businessArticles: placeholderArticles,
    techArticles: placeholderArticles,
    searchArticles: null,
  },
  mutations: {
    setBaseArticles(state, data) {
      state.baseArticles = data;
    },
    setBusinessArticles(state, data) {
      state.businessArticles = data;
    },
    setTechArticles(state, data) {
      state.techArticles = data;
    },
    setSearchArticles(state, data) {
      state.searchArticles = data;
    },
  },
  actions: {
    // Articles
    async fetchBaseArticles(context) {
      const res = await axios.get(`${apiUrl}`);
      const data = await res.data.articles;
      context.commit("setBaseArticles", data)
    },
    async fetchBusinessArticles(context) {
      const res = await axios.get(`${apiUrl}business`);
      const data = await res.data.articles;
      context.commit("setBusinessArticles", data)
    },
    async fetchTechArticles(context) {
      const res = await axios.get(`${apiUrl}tech`);
      const data = await res.data.articles;
      context.commit("setTechArticles", data)
    },
    async fetchSearchArticles(context, payload) {
      const res = await axios.get(`${apiUrl}search`, payload);
      const data = await res.data.articles;
      context.commit("setSearchArticles", data)
    }
  }
})