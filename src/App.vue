<template>
  <SideNav/>
  <RouterView/>
</template>

<script>
import SideNav from "@/components/SideNav.vue";

export default {
  components: {
    SideNav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Noto+Serif:ital@1&display=swap');
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  display: flex;
}

nav {
  padding: 30px;
}

main {
  margin-left: 60px;
}
</style>
