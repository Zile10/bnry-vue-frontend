<template>
  <div id="navbar" :class="{ 'navbar-closed': !navOpen }">
    <nav>
      <div class="burger-menu" v-if="!navOpen" @click="toggleNavbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="x-menu" v-else @click="toggleNavbar">
        <img src="https://img.icons8.com/sf-regular-filled/48/FFFFFF/x.png" />
      </div>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link" href="#">Link</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link to="/"
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </router-link>
          <ul class="dropdown-menu">
            <li><router-link to="/" class="dropdown-item" href="#">Action</router-link></li>
            <li><router-link to="/" class="dropdown-item" href="#">Another action</router-link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><router-link to="/" class="dropdown-item" href="#">Something else here</router-link></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>
<style scoped>
#navbar {
  background-color: #222;
  position: absolute;
  height: 100vh;
  width: 300px;
  top: 0;
  left: 0px;
  transition: 0.5s ease-in;
}

#navbar.navbar-closed {
  left: -240px;
}
.burger-menu {
  position: absolute;
  right: 10px;
  /* border: 1px solid black; */
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5 ease-in;
  widows: 35px;
  height: 30px !important;
}

.x-menu {
  position: absolute;
  right: 20px;
}
.x-menu img {
  width: 48px;
  height: 40px;
}
.burger-menu span {
  display: block;
  width: 30px;
  height: 2px;
  margin: 6px;
  border-radius: 5px;
  background-color: white;
  rotate: 0;
  transition: 0.5 ease-in;
}
.navbar-nav {
    margin-top: 30px;
}

.active {
    color: crimson !important;
}
</style>
