<template>
  <div class="home">
    <div class="hero">
      <div class="hero-info my-auto">
        <h2>Be Informed, with all the best and latest articles from your favourite Sources</h2>
      </div>

      <div class="hero-carousel my-auto">
        <Carousel :articles="articles"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
export default {
  name: 'HomeView',
  components: {
    Carousel
  },
  created() {
    this.$store.dispatch("fetchArticles")
  },
  computed: {
    articles() {
      // console.log(this.$store.state.articles);
      return this.$store.state.articles
    }
  }
}
</script>


<style>
  .hero {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 90vh;
  }
  .hero-info {
    background-color: cyan;
    /* width: 500px; */
    
  }
</style>