<template>
  <div id="carousel">
    <div id="carouselAutoplaying" class="carousel ride" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img :src="item[0].urlToImage" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ item[0].title }}</h5>
            <p></p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img :src="item[1].urlToImage" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ item[1].title }}</h5>
            <p></p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img :src="item[2].urlToImage" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ item[2].title }}</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  </div>
</template>
<script>
export default {
  props: ["articles"],
  computed: {
    item() {
      if (this.articles) return this.articles;
      return [
        {
          urlToImage: "https://i.postimg.cc/Hk7TQLGB/placeholder-image-better-removebg-preview.png",
          title: "Article Title",
          description: "Article Description",
        },
      ]
    },
  },
};
</script>
<style>
#carousel {
  width: 85%;
  margin: 0 auto;
  background-color: #eee;
}
.carousel {
  margin: auto;
  width: 100%;
}
.carousel img {
  margin: auto;
  max-width: 100%;
  max-height: 500px;
}
.carousel-caption {
  background-color: rgba(0, 0, 0, 0.7);
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
}
</style>
