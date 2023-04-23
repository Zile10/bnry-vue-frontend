<template>
    <div class="card">
        <img :src="item.urlToImage" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>
<script>
export default {
    props: ['article'],
    computed: {
        item(){
            if (this.article) return this.article
            return {
                urlToImage: 'https://i.postimg.cc/Hk7TQLGB/placeholder-image-better-removebg-preview.png',
                title: "Article Title",
                description: "Article Description",
            }
        }
    }
}
</script>
<style>
    .card {
        max-width: 50%;
        max-height: 400px;
    }
    .card img {
        max-height: 250px;
        
    }
</style>