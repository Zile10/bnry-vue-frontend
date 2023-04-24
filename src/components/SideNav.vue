<template>
  <div class="side-nav">

    <!-- Closed/Open Area of Nav -->
    <div class="side-nav-mini">
      <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/menu--v1.png" class="burger-menu" @click="toggleNavbar"/>
      <ul class="navbar-nav nav-icons me-auto mb-2 mb-lg-0" :class="{closed: !navOpen}">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#homeDiv">
            <img src="https://img.icons8.com/ios/50/FFFFFF/home--v1.png" class="nav-icon"/>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#searchDiv">
            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" class="nav-icon"/> 
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#businessDiv">
            <img src="https://img.icons8.com/ios/50/FFFFFF/business--v1.png" class="nav-icon"/>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#techDiv">
            <img src="https://img.icons8.com/ios/50/FFFFFF/electronics.png" class="nav-icon"/>
          </a>
        </li>
      </ul>
    </div>

    <!-- Open-Only Area of Nav -->
    <div class="side-nav-large" :class="{ 'side-nav-open': navOpen }">
      <div></div>
      <ul class="navbar-nav navbar-open me-auto mb-2 mb-lg-0" v-show="navOpen">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#homeDiv">
            <img src="https://img.icons8.com/ios/50/FFFFFF/home--v1.png" class="nav-icon"/>
              <span>Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#searchDiv">
            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" class="nav-icon"/> 
              <span>Explore</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#businessDiv">
            <img src="https://img.icons8.com/ios/50/FFFFFF/business--v1.png" class="nav-icon"/>
            <span>Business</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#techDiv">
            <img src="https://img.icons8.com/ios/50/FFFFFF/electronics.png" class="nav-icon"/>
            <span>Technology</span>
          </a>
        </li>
      </ul>
    </div>
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
/* General Nav Styles */
.side-nav {
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 20;
  height: 100vh;
}

.side-nav>* {
  display: grid;
  grid-template-rows: 1fr 7fr;
}
ul li {
  margin-top: 10px;
}

ul li a {
  font-weight: 400;
}

ul li a.router-link-exact-active {
  color: #eee;
}

/* Closed Nav Styles */
.side-nav-mini {
  background-color: #111;
  box-shadow: 0 0 3px #444;
  min-height: 100vh;
  height: 100%;
  width: 50px;
  position: absolute;
  z-index: 20;
  justify-content: center;
}
.burger-menu {
  cursor: pointer;
  border-radius: 30px;
  padding: 5px;
  margin-top: 10px;
}
.burger-menu:hover {
  background-color: #444;
}

.side-nav-mini ul {
  margin: 0 auto;
}
.nav-icon {
  width: 32px;
}


/* Open Nav Styles */
.side-nav-large {
  background-color: #111;
  transition: 0.4s ease-in;
  /* Sizing */
  min-height: 100vh;
  height: 100%;
  width: 50px;
  /* Position */
  position: relative;
  left: -250px;
  /* Grid */
  display: grid;
  grid-template-rows: 1fr 7fr;
}

.side-nav-large ul {
  text-align: left;
  margin-left: 18px;
}
.side-nav-large ul li span{
  /* padding: 15px; */
  margin-left: 25px;
  vertical-align: middle;
}
.side-nav-large.side-nav-open {
  left: 0px;
  width: 300px;
}

/* #navbar {
  background-color: #222;
  position: absolute;
  height: 100%;
  width: 300px;
  top: 0;
  left: 0px;
  transition: 0.4s ease-in;
}

#navbar.navbar-closed {
  left: -240px;
}
.burger-menu {
  position: absolute;
  right: 10px;
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
  position: absolute;
  top: 100px;
  text-align: left;
}

.active {
  color: crimson !important;
}

a:hover {
  transform: translateX(5px);
}
a>img {
  width: 32px;
  margin-right: 8px;
  position: relative;
}

.nav-icons {
  position: absolute;
  transition: 0.8s;
  top: 100px;
  right: 230px;
}

.nav-icons.closed {
  transition: 0.4s;
  right: 10px;
} */
</style>
