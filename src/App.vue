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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

nav {
  padding: 30px;
}

main {
  margin-left: 60px;
}
</style>
