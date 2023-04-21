<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="articles[0].urlToImage" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ articles[0].title }}</h5>
          <p></p>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="articles[1].urlToImage" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ articles[1].title }}</h5>
          <p></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
    computed: {
        articles() {
            let articles = this.$store.state.articles
            return articles
        }
    },
};
</script>
<style>
.carousel-caption {
    background-color: rgba(0, 0, 0, 0.5);
}
.carousel-control-prev-icon, .carousel-control-next-icon {
    background-color: rgba(0, 0, 0, 0.3);;
}


</style>
