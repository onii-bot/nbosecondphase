<template>
  <div class="about">
    <img src="@/assets/about-banner.webp" alt="" class="about-banner" />
    <p class="about-discription">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <div class="cards">
      <div class="founder">
        <img src="@/assets/founder.webp" alt="" class="founder-img" />
        <p class="teams">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="co-founder">
        <img src="@/assets/collab-manager.webp" alt="" class="cofounder-img" />
        <p class="teams">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="developer">
        <img src="@/assets/logo.webp" alt="" class="developer-img" />
        <p class="teams">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
  <div class="footer"></div>
</template>

<script>
let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      document.body.classList.add("scrolled");
    } else {
      // Scrolling up
      document.body.classList.remove("scrolled");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  },
  false
);
</script>

<style>
.about {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: medium;
  color: aliceblue;
  padding-top: 5vh;
}

.about-banner {
  width: 100%;
  height: auto;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.about-discription {
  width: 80%;
  max-width: 100%;
  margin: 1vh auto 0;
  padding: 2vh 0;
  font-size: 18px;
  color: #f5f5f5;
  transition: opacity 1.2s ease-out;
  opacity: 1;
}

.scrolled .about-discription {
  opacity: 0;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 15vh auto;
  width: 80%;
  z-index: 1;
}

.founder,
.co-founder,
.developer {
  flex: 1 1 calc(33.33% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh;
  border-radius: 10px;
  /* background-color: rgba(71, 0, 0, 1); */
  text-align: center;
  max-width: 300px;
}

.founder-img,
.cofounder-img,
.developer-img {
  width: 70%;
  height: auto;
}

.teams {
  margin-top: 1rem;
  font-size: 14px;
  color: #ffffff;
}

.footer {
  width: 100%;
  height: 300px;
  background-color: rgba(71, 0, 0, 0.6);
}

@media (max-width: 1385px) {
  .about-discription {
    width: 90%;
  }

  .cards {
    gap: 20px;
  }

  .founder,
  .co-founder,
  .developer {
    margin: 2vh;
  }
}

@media (max-width: 992px) {
  .about-discription {
    width: 90%;
    font-size: 16px;
  }

  .cards {
    margin-top: 20vh;
  }

  .founder,
  .co-founder,
  .developer {
    max-width: 45%;
  }
}

@media (max-width: 768px) {
  .about-discription {
    width: 90%;
    font-size: 16px;
    padding-top: 10vh;
  }

  .cards {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15vh;
    gap: 15px;
  }

  .founder,
  .co-founder,
  .developer {
    /* flex: 1 1 calc(50% - 15px); */
    max-width: calc(50% - 15px);
    margin-top: 2vh;
  }
  .founder .founder-img,
  .co-founder .cofounder-img,
  .developer .developer-img {
    width: 100%;
    height: auto;
  }
}
@media (max-width: 600px) {
  .about-discription {
    font-size: 14px;
    margin-top: 5vh;
    width: 90%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .cards {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10vh;
    gap: 10px;
  }

  .founder,
  .co-founder,
  .developer {
    /* flex: 1 1 calc(50% - 10px); */
    /* max-width: calc(50% - 10px); */
    flex: 1 1 100%;
    max-width: 60%;
    margin-top: 2vh;
  }
  .founder .founder-img,
  .co-founder .cofounder-img,
  .developer .developer-img {
    width: 100%; /* Ensure images occupy full width of their parent */
    height: auto;
  }
}
@media (max-width: 483px) {
  .about-discription {
    font-size: 14px;
    margin-top: 5vh;
    width: 90%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10vh;
    gap: 10px;
  }

  .founder,
  .co-founder,
  .developer {
    flex: 1 1 100%;
    max-width: 80%;
    margin-top: 2vh;
  }
}
</style>
