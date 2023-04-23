<template>
  <div id="home">
    <TopNav/>
    <div class="news-container">
      <Carousel/>
      <div v-if="!articles">Loading...</div>
      <div class="scroller" v-else>
        <h3>Business</h3>
        <div class="cards">
          <Card :article="articles[0]"/>
          <Card :article="articles[1]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Carousel from "@/components/Carousel.vue";
import TopNav from "@/components/TopNav.vue";
import Card from "@/components/Card.vue";

export default {
  name: 'HomeView',
  components: {
    Carousel, 
    TopNav,
    Card
  },
  
  computed: {
    articles() {
      return this.$store.state.articles
    }
  }
}
</script>


<style>
  #home {
    width: 80%;
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
  .cards {
    display: flex;
  }
</style>