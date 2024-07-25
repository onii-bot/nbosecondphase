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
        <RouterLink to="/" class="Routerlink" @click="closeNavbar" active-class="active-link"
          >HOME</RouterLink
        >
        <RouterLink to="/wallet-checker" class="Routerlink" @click="closeNavbar" active-class="active-link"
          >WALLET CHECKER</RouterLink
        >
        <RouterLink to="/teams" class="Routerlink" @click="closeNavbar" active-class="active-link"
          >TEAMS</RouterLink
        >

        <RouterLink to="/faqs" class="Routerlink" @click="closeNavbar" active-class="active-link"
          >FAQ</RouterLink
        >

        <!-- <RouterLink to="/collection" class="Routerlink" @click="closeNavbar"
          >COLLECTIONS</RouterLink
        > -->
      </ul>
      <div class="close-button" @click="toggleNavbar">
        <img src="@/assets/cross.svg" alt="Close Icon" />
      </div>
      <div class="hamburger-social-links">
        <ul>
          <li>
            <a href="https://www.discord.com">
              <img
                src="@/assets/discordlog.svg"
                alt="Discord"
                class="discord1"
              />
            </a>
          </li>
          <li>
            <a href="https://x.com/NewBitcoinOrder">
              <img
                src="@/assets/twitterlog.svg"
                alt="Twitter"
                class="twitter1"
              />
            </a>
          </li>
          <li>
            <a href="https://magiceden.io/ordinals/marketplace/nbo">
              <img
                src="@/assets/magiceden.png"
                alt="Instagram"
                class="magiceden1"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <ul class="navbar-social-links">
      <li>
        <a href="https://www.discord.com">
          <img src="@/assets/discordlog.svg" alt="Discord" class="discord" />
        </a>
      </li>
      <li>
        <a href="https://x.com/NewBitcoinOrder">
          <img src="@/assets/twitterlog.svg" alt="Twitter" class="twitter" />
        </a>
      </li>
      <li v-if="showInstagram">
        <a href="https://magiceden.io/ordinals/marketplace/nbo">
          <img src="@/assets/magiceden.png" alt="Instagram" class="magiceden" />
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

<!-- <style>
* {
  margin: 0;
  padding: 0;
  font-family: "Bangers", system-ui;
}

.navbar {
  font-family: "Bangers", system-ui;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #141414;
  position: relative;
  z-index: 111;
}

.brand-title {
  margin-right: 4.5rem;
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
  padding: 1rem;

  gap: 1.2rem;
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
  margin-right: 2rem;
  padding: 0;
  display: flex;
}

.navbar-social-links li {
  margin-left: 1rem;
  stroke: #fff;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
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
  height: auto;
}
.discord {
  width: 40px;
  /* margin-right: 15px;
  padding-right: 14px; */
}
.twitter {
  width: 32px;
}
.magiceden {
  width: 60px;
}

.hamburger-social-links img {
  width: 32px;
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
  .magiceden {
    display: none;
  }
  .twitter {
    padding: 4px;
    margin: none;
  }
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
    width: 2rem;
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
    background: hsla(0, 0%, 6%, 0.5);
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
    flex-direction: column;
  }
  .hamburger-social-links .twitter1 {
    width: 40px;
    padding-left: 8px;
  }
  .hamburger-social-links .discord1 {
    width: 40px;
    padding: 8px;
  }
  .hamburger-social-links .magiceden1 {
    display: flex;
    width: 57px;
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
  .navbar-social-links img {
    width: 40px;
    height: auto;
  }
  .twitter {
    padding-top: 0px;
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

@media (max-width: 300px) {
  .navbar-social-links .discord {
    display: none;
  }
}

@media (max-width: 250px) {
  .navbar-social-links .twitter {
    display: none;
  }
}
</style> -->

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Bangers", system-ui;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #141414;
  position: relative;
  z-index: 111;
}

.brand-title {
  margin-right: 4.5rem;
}

.brand-title img {
  width: 4rem;
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
  padding: 1rem;
  display: flex;
  gap: 1.2rem;
  -webkit-tap-highlight-color: transparent;
}

.left-links {
  flex-grow: 1;
}

.Routerlink {
  margin: 0 0.5rem;
}
.Routerlink {
  margin: 0 0.5rem;
  position: relative;
  padding-bottom: 0.3rem;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.Routerlink::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  color: red;
  background-color: #e4303c;
  transition: width 0.3s ease;
}
.Routerlink.active-link {
  color: #e4303c;
}

.Routerlink:hover::after {
  width: 100%;
  color: red;
}

.active-link::after {
  background-color: #e4303c;
  color: #e4303c;
}
  
.navbar-social-links {
  list-style: none;
  margin-right: 2rem;
  padding: 0;
  display: flex;
}

.navbar-social-links li {
  margin-left: 1rem;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
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

.navbar-social-links img,
.hamburger-social-links img {
  height: auto;
}

.discord {
  width: 40px;
  margin-right: 0.5rem;
}

.twitter {
  width: 32px;
}

.magiceden {
  width: 60px;
}

.hamburger-social-links img {
  width: 32px;
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
}

@media (max-width: 1024px) {
  .magiceden {
    display: none;
  }
  .twitter {
    padding: 4px;
  }
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
    width: 2rem;
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
    padding: 0 0 1rem 2rem;
    width: min(100vw, 18rem);
    height: 100%;
    background: hsla(0, 0%, 6%, 0.5);
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
    flex-direction: column;
    padding: 5rem 0 0 0;
  }
  .hamburger-logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
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
    flex-direction: column;
    align-items: center;
  }
  .hamburger-social-links .twitter1 {
    width: 40px;
    /* padding-left: 8px; */
  }
  .hamburger-social-links .discord1 {
    width: 40px;
    /* padding: 8px; */
  }
  .hamburger-social-links .magiceden1 {
    width: 57px;
  }
  .hamburger-social-links li {
    margin-left: 0.5rem;
    margin-right: 0.7rem;
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
  .navbar-social-links img {
    width: 40px;
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

@media (max-width: 300px) {
  .navbar-social-links .discord {
    display: none;
  }
}

@media (max-width: 250px) {
  .navbar-social-links .twitter {
    display: none;
  }
}
</style>
