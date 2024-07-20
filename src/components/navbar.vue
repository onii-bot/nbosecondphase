<!-- VERSION -->
<!-- <template>
  <nav class="navbar">
    <a
      href="#"
      v-if="!isNavbarOpen"
      class="toggle-button"
      @click="toggleNavbar"
      :class="{ active: isNavbarOpen }"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>
    <RouterLink to="/" class="brand-title">
      <img src="@/assets/logo.webp" alt="Brand Logo" />
    </RouterLink>
    <div :class="{ 'navbar-links': true, active: isNavbarOpen }">
      <ul class="left-links">
        <RouterLink to="/" class="Routerlink" @click="closeNavbar"
          >HOME</RouterLink
        >
        <RouterLink to="/teams" class="Routerlink" @click="closeNavbar"
          >TEAMS</RouterLink
        >
        <RouterLink to="/faqs" class="Routerlink" @click="closeNavbar"
          >FAQ</RouterLink
        >
        <RouterLink to="/wallet-checker" class="Routerlink" @click="closeNavbar"
          >WALLET CHECKER</RouterLink
        >
      </ul>
      <div class="close-button" @click="toggleNavbar">
        <img src="@/assets/close-icon.webp" alt="Close Icon" />
      </div>
      <div class="hamburger-social-links">
        <ul>
          <li>
            <a href="https://www.discord.com">
              <img src="@/assets/discord.webp" alt="Discord" />
            </a>
          </li>
          <li>
            <a href="https://www.x.com">
              <img src="@/assets/x-new.webp" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <img src="@/assets/instagram-new.webp" alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <ul class="navbar-social-links">
      <li>
        <a href="https://www.discord.com">
          <img src="@/assets/discord.webp" alt="Discord" />
        </a>
      </li>
      <li>
        <a href="https://www.x.com">
          <img src="@/assets/x.webp" alt="Twitter" />
        </a>
      </li>
      <li v-if="showInstagram">
        <a href="https://www.instagram.com">
          <img src="@/assets/instagram.webp" alt="Instagram" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
      showInstagram: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    closeNavbar() {
      this.isNavbarOpen = false;
    },
    checkMediaWidth() {
      this.showInstagram = window.innerWidth >= 1024;
    },
  },
  mounted() {
    this.checkMediaWidth();
    window.addEventListener("resize", this.checkMediaWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMediaWidth);
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #2d2d2d;
  position: relative;
}

.brand-title {
  margin-right: 1rem;
}

.brand-title img {
  width: 4rem;
  z-index: 100;
  height: auto;
}

.navbar-links {
  display: flex;
  justify-content: space-between;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
}

.navbar-links ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  -webkit-tap-highlight-color: transparent;
}

.left-links {
  flex-grow: 1;
}

.Routerlink {
  margin: 0 0.5rem;
}

.navbar-social-links {
  list-style: none;
  margin-right: 1rem;
  padding: 0;
  display: flex;
}

.navbar-social-links li {
  margin-left: 1rem;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.toggle-button {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  cursor: pointer;
  position: relative;
  z-index: 1000;
}

.toggle-button.active .bar {
  background-color: #fff;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.toggle-button .bar:not(:last-child) {
  margin-bottom: 5px;
}

.navbar-social-links img {
  width: 30px;
  height: 30px;
}

.hamburger-social-links img {
  width: 30px;
  height: 30px;
}

.close-button {
  display: none;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  z-index: 1000;
}

@media (max-width: 1024px) {
  .toggle-button {
    display: flex;
  }

  .close-button {
    display: block;
  }

  .navbar {
    padding: 1rem;
  }

  .close-button img {
    width: 2.5rem;
  }

  .brand-title {
    position: absolute;
    left: 5rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .navbar-links {
    display: none;
    align-items: stretch;
    position: fixed;
    top: 0;
    left: 0;
    gap: 0;
    padding: 0 0 1rem 2rem;
    box-sizing: border-box;
    width: min(100vw, 18rem);
    height: 100%;
    background: hsla(0, 0%, 6%, 0.7);
    flex-direction: column;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    transition: transform 0.2s ease-out;
    transform: translateX(-100%);
    z-index: 9999;
  }

  .navbar-links.active {
    display: flex;
    transform: translateX(0%);
  }

  .navbar-links ul {
    width: 100%;
    flex-direction: column;
    padding: 5rem 0 0 0;
  }

  .Routerlink {
    text-align: start;
    margin: 1rem 0;
  }

  .hamburger-social-links {
    display: flex;
    justify-content: flex-start;
    padding: 0 1rem;
    position: absolute;
    bottom: 1rem;
    left: 0.5rem;
    width: 100%;
  }
  .hamburger-social-links ul {
    display: flex;
    flex-direction: row;
  }
  .hamburger-social-links li {
    margin-left: 0.5rem;
    margin-right: 0.7rem;
    display: flex;
  }

  /* Blurred background when navbar is active */
  .navbar-links.active::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: -1;
  }
}

@media (min-width: 1025px) {
  .brand-title {
    margin-left: 1rem;
    text-align: left;
  }

  .left-links {
    display: flex;
  }

  .navbar-social-links {
    display: flex;
    align-items: center;
  }

  .hamburger-social-links {
    display: none;
  }
}
</style> -->

<!-- version2 -->
<template>
  <nav class="navbar">
    <a
      href="#"
      v-if="!isNavbarOpen"
      class="toggle-button"
      @click="toggleNavbar"
      :class="{ active: isNavbarOpen }"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>
    <RouterLink to="/" class="brand-title">
      <img src="@/assets/logo.webp" alt="Brand Logo" />
    </RouterLink>
    <div :class="{ 'navbar-links': true, active: isNavbarOpen }">
      <div class="hamburger-logo">
        <img src="@/assets/logo.webp" alt="Brand Logo" />
      </div>
      <ul class="left-links">
        <RouterLink to="/" class="Routerlink" @click="closeNavbar"
          >HOME</RouterLink
        >
        <RouterLink to="/teams" class="Routerlink" @click="closeNavbar"
          >TEAMS</RouterLink
        >
        <RouterLink to="/faqs" class="Routerlink" @click="closeNavbar"
          >FAQ</RouterLink
        >
        <RouterLink to="/wallet-checker" class="Routerlink" @click="closeNavbar"
          >WALLET CHECKER</RouterLink
        >
        <!-- <RouterLink to="/collection" class="Routerlink" @click="closeNavbar"
          >COLLECTIONS</RouterLink
        > -->
      </ul>
      <div class="close-button" @click="toggleNavbar">
        <img src="@/assets/close-icon2.webp" alt="Close Icon" />
      </div>
      <div class="hamburger-social-links">
        <ul>
          <li>
            <a href="https://www.discord.com">
              <img src="@/assets/discord.webp" alt="Discord" />
            </a>
          </li>
          <li>
            <a href="https://www.x.com">
              <img src="@/assets/x-new.webp" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <img src="@/assets/instagram-new.webp" alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <ul class="navbar-social-links">
      <li>
        <a href="https://www.discord.com">
          <img src="@/assets/discord.webp" alt="Discord" />
        </a>
      </li>
      <li>
        <a href="https://www.x.com">
          <img src="@/assets/x.webp" alt="Twitter" />
        </a>
      </li>
      <li v-if="showInstagram">
        <a href="https://www.instagram.com">
          <img src="@/assets/instagram.webp" alt="Instagram" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
      showInstagram: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    closeNavbar() {
      this.isNavbarOpen = false;
    },
    checkMediaWidth() {
      this.showInstagram = window.innerWidth >= 1024;
    },
  },
  mounted() {
    this.checkMediaWidth();
    window.addEventListener("resize", this.checkMediaWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMediaWidth);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #2d2d2d;
  position: relative;
}

.brand-title {
  margin-right: 1rem;
}

.brand-title img {
  width: 4rem;
  z-index: 100;
  height: auto;
}

.navbar-links {
  display: flex;
  justify-content: space-between;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
}

.navbar-links ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  -webkit-tap-highlight-color: transparent;
}

.left-links {
  flex-grow: 1;
}

.Routerlink {
  margin: 0 0.5rem;
}

.navbar-social-links {
  list-style: none;
  margin-right: 1rem;
  padding: 0;
  display: flex;
}

.navbar-social-links li {
  margin-left: 1rem;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.toggle-button {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  cursor: pointer;
  position: relative;
  z-index: 1000;
}

.toggle-button.active .bar {
  background-color: #fff;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.toggle-button .bar:not(:last-child) {
  margin-bottom: 5px;
}

.navbar-social-links img {
  width: 30px;
  height: auto;
}

.hamburger-social-links img {
  width: 30px;
  height: auto;
}

.close-button {
  display: none;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  z-index: 1000;
}

.hamburger-logo img {
  width: 4rem;
  height: auto;
}

@media (max-width: 1024px) {
  .toggle-button {
    display: flex;
  }

  .close-button {
    display: block;
  }

  .navbar {
    padding: 1rem;
  }

  .close-button img {
    width: 2.5rem;
  }

  .brand-title {
    position: absolute;
    left: 5rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .navbar-links {
    display: none;
    align-items: stretch;
    position: fixed;
    top: 0;
    left: 0;
    gap: 0;
    padding: 0 0 1rem 2rem;
    box-sizing: border-box;
    width: min(100vw, 18rem);
    height: 100%;
    background: hsla(0, 0%, 6%, 0.7);
    flex-direction: column;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    transition: transform 0.2s ease-out;
    transform: translateX(-100%);
    z-index: 9999;
  }

  .navbar-links.active {
    display: flex;
    transform: translateX(0%);
  }

  .navbar-links ul {
    width: 100%;
    flex-direction: column;
    padding: 5rem 0 0 0;
  }

  .hamburger-logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .hamburger-logo {
    display: block;
  }

  .Routerlink {
    text-align: start;
    margin: 1rem 0;
  }

  .hamburger-social-links {
    display: flex;
    justify-content: flex-start;
    padding: 0 1rem;
    position: absolute;
    bottom: 1rem;
    left: 0.5rem;
    width: 100%;
  }
  .hamburger-social-links ul {
    display: flex;
    flex-direction: row;
  }
  .hamburger-social-links li {
    margin-left: 0.5rem;
    margin-right: 0.7rem;
    display: flex;
  }

  .navbar-links.active::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: -1;
  }
}

@media (min-width: 1025px) {
  .brand-title {
    margin-left: 1rem;
    text-align: left;
  }

  .left-links {
    display: flex;
  }

  .navbar-social-links {
    display: flex;
    align-items: center;
  }

  .hamburger-social-links {
    display: none;
  }

  .hamburger-logo {
    display: none;
  }
}
</style>
