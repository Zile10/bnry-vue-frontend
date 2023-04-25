<template>
    <div class="search-bar">
        <form class="d-flex" role="search">
            <img src="https://img.icons8.com/ios-filled/50/null/search--v1.png"/>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery">
            <button class="btn" type="submit" @click.prevent="search()">Search</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchQuery: '',

        }
    },
    methods: {
        search() {
            this.$store.dispatch("fetchSearchArticles", {query: this.searchQuery});
        }
    }
}
</script>
<style scoped>
    .search-bar {
        width: 85%;
        height: 60px;
        margin: 20px auto;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
    }

    .search-bar img {
        width: 32px;
        height: 32px;
        margin: 0 5px;
        margin-right: 10px;
    }
    button.btn {
        background-color: crimson;
        color: white;
        border-radius: 5px;
    }
</style>