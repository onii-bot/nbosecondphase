<template>
  <!-- Hamburger icon -->
  <div class="ham-nav">
    <div class="hamburger-menu" @click="toggleMenu" v-if="isSmallScreen">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <RouterLink to="/" class="logo" v-if="isSmallScreen">
      <img src="@/assets/logo.webp" alt="" />
    </RouterLink>
  </div>

  <!-- Responsive menu -->
  <div class="menu" :class="{ open: isMenuOpen && isSmallScreen }">
    <ul class="nav">
      <RouterLink to="/" class="nav-item" @click="toggleMenu">Home</RouterLink>
      <RouterLink to="/about" class="nav-item" @click="toggleMenu"
        >About us</RouterLink
      >
    </ul>
  </div>

  <!-- Regular navbar for larger screens -->
  <nav class="navbar" v-if="!isSmallScreen">
    <RouterLink to="/" class="logo"
      ><img src="@/assets/logo.webp" alt=""
    /></RouterLink>
    <ul class="nav">
      <RouterLink to="/" class="nav-item" active-class="active"
        >Home</RouterLink
      >
      <RouterLink to="/about" class="nav-item" active-class="active"
        >About us</RouterLink
      >
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isSmallScreen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 768;
    },
  },
  mounted() {
    this.checkScreenSize();

    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: large;
  margin-right: 5vh;
  z-index: -1;
}

.navbar img {
  width: 6vw;
}

.nav {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  padding: 4vh;
  color: #f1f1f1;
  text-decoration: none;
}

.nav-item:hover,
.nav-item.active {
  color: #b20000;
}
@media (min-width: 2000px) {
  .navbar {
    font-size: larger;
  }
}


@media (max-width: 768px) {
  .navbar {
    justify-content: space-between;
  }
  .navbar img {
    width: 1vh;
  }
  .wallet-checker {
    display: flex;
    flex-direction: column;
  }
  .nav {
    .nav-item {
      padding: 4vh;
    }
  }
  .ham-nav {
    /* margin-bottom: 13vh; */
  }
}

.hamburger-menu {
  cursor: pointer;
  display: none;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
.hamburger-menu div {
  width: 25px;
  height: 3px;
  background-color: red;
  margin: 5px 0;
}

.menu {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  /* background-color: rgba(90, 0, 0, 0.363); */
  background-color: #5a0000;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(117, 0, 0, 0.2);
  z-index: 999;
}

.menu.open {
  display: block;
}

.menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

@media screen and (max-width: 768px) {
  .hamburger-menu {
    display: block;
  }

  .menu {
    width: 100%;
    height: 10%;
    right: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    /* background-color: rgba(90, 0, 0, 0.363); */
    background-color: #5a0000;
  }

  .menu.open {
    transform: translateX(0);
  }
  .logo img {
    width: 8vh;
    margin-left: 2vw;
    margin-top: 2vh;
  }
}
</style>
