<!-- <template>
  <nav class="navbar">
    <div class="logo"><img src="@/assets/logo.png" alt="Logo" /></div>
    <div class="menu-icon" @click="toggleMenu">&#9776;</div>
    <ul class="nav" :class="{ active: isActive }">
      <RouterLink to="/" class="nav-item">Home</RouterLink>

      <RouterLink to="/about" class="nav-item">About us</RouterLink>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: large;
  margin-right: 5vh;
  /* background-color: #333; */
  color: white; /* Text color for contrast */
}

.navbar img {
  width: 12vh;
}

.menu-icon {
  font-size: 24px;
  cursor: pointer;
  display: none;
}

.nav {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  padding: 1rem; /* Adjust padding as needed */
  color: inherit; /* Inherit text color */
  text-decoration: none;
}

.nav-item:hover {
  color: #b20000;
}

@media (max-width: 768px) {
  .menu-icon {
    display: block;
    position: absolute;
  }

  .nav {
    position: fixed;
    right: 20%;
    top: -100%; /* Initially hidden off-screen */
    height: 16%;
    width: 50%; /* Adjust width as needed */
    max-width: 200px; /* Maximum width for the menu */
    background-color: #333; /* Background color for contrast */
    list-style-type: none;
    padding: 20px;
    margin: 0;
    display: flex;
    flex-direction: column;
    transition: top 0.6s ease; /* Smooth transition animation */
  }

  .nav.active {
    top: 0; /* Slide in from the right */
  }

  .nav-item {
    padding: 1rem; /* Adjust padding as needed */
    color: inherit; /* Inherit text color */
    text-decoration: none;
  }
}
</style> -->

<template>
  <nav class="navbar">
    <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    <ul class="nav">
      <RouterLink to="/" class="nav-item">Home</RouterLink>
      <RouterLink to="/about" class="nav-item">About us</RouterLink>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: large;
  margin-right: 5vh;
}
.navbar img {
  width: 12vh;
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

.nav-item:hover {
  color: #b20000;
}

@media (max-width: 992px) {
  .navbar img {
    width: 10vh;
  }
}

@media (max-width: 768px) {
  .navbar {
    justify-content: space-between;
  }
  .navbar img {
    width: 10vh;
  }
  .wallet-checker {
    display: flex;
    flex-direction: column;
  }
  .nav {
    .nav-item {
      padding: 4vh;
      /* text-align: center; */
      /* width: 100%; */
    }
  }
}
@media (max-width: 576px) {
  .navbar img {
    width: 8vh;
  }
}
</style>
