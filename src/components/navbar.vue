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
