<template>
  <div id="home">
    <TopBar id="homeDiv"/>
    <div class="news-container">
      <Carousel :articles="baseArticles"/>

      <div id="searchDiv" class="searches">
        <SearchBar/>
        <div class="scroller">
          <div>
            <h3 :class="{ 'textLighter': !searchArticles }">Search Results: <span v-if="!searchArticles"> (No search)</span></h3>
            <div class="cards" v-if="searchArticles">
              <Card :article="searchArticles[0]"/>
              <Card :article="searchArticles[1]"/>
            </div>
          </div>
        </div>
      </div>

      <div class="scroller" id="businessDiv">
        <div>
          <h3>Business</h3>
          <div v-if="!businessArticles">Loading...</div>
          <div class="cards" v-else>
            <Card :article="businessArticles[0]"/>
            <Card :article="businessArticles[1]"/>
          </div>
        </div>
      </div>

      <div class="scroller" id="techDiv">
        <div>
          <h3>Technology</h3>
          <div v-if="!technologyArticles">Loading...</div>
          <div class="cards" v-else>
            <Card :article="technologyArticles[0]"/>
            <Card :article="technologyArticles[1]"/>
          </div>
        </div> 
      </div>
      
    </div>

    <Footer/>
  </div>
</template>

<script>

import Carousel from "@/components/Carousel.vue";
import TopBar from "@/components/TopBar.vue";
import Card from "@/components/Card.vue";
import SearchBar from "@/components/SearchBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'HomeView',
  components: {
    Carousel, 
    SearchBar, 
    TopBar,
    Card,
    Footer
  },
  
  computed: {
    baseArticles() {
      return this.$store.state.baseArticles
    },
    businessArticles() { 
      return this.$store.state.businessArticles
    },
    technologyArticles() {
      return this.$store.state.techArticles
    },
    searchArticles() {
      return this.$store.state.searchArticles
    }

  },

  created() {
    this.$store.dispatch("fetchBaseArticles");
    this.$store.dispatch("fetchBusinessArticles");
    this.$store.dispatch("fetchTechArticles");
  },
}
</script>


<style>
  #home {
    width: 100%;
    justify-content: center;
    /* background-color: #888; */
    margin: 0 auto;
  }

  .news-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h3 {
    text-align: start;
  }
  .scroller {
    width: 85%;
    margin: 10px auto;
  }
  .cards {
    display: flex;
  }

  .textLighter {
    color: #999;
    font-size: larger;
  }
</style>