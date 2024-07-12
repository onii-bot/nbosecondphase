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
  /* font-size: medium;
  color: aliceblue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  font-size: medium;
  color: aliceblue;
}
.about-banner {
  width: 100%;

  position: fixed;
  top: 5%;
  z-index: -12;
  opacity: 0.4;
}
.about-discription {
  display: flex;
  padding-top: 5vh;
  width: 80%;

  text-align: center;
  font-size: 18px;
  color: #f5f5f5;
  opacity: 1;
  transition: opacity 1.2s ease-out;
  /* background-color: rgba(165, 42, 42, 0.2); */
}
.scrolled .about-discription {
  opacity: 0;
}

.cards {
  display: grid;
  margin: 10vh 10vh;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 50px;
}

.teams {
  text-align: center;
}
.founder,
.co-founder,
.developer {
  margin: 0 2vw;

  padding: 2vh;
  border-radius: 10px;
  background-color: rgba(71, 0, 0, 1);

  /* box-shadow: #a33e3e; */
}
.founder-img,
.cofounder-img,
.developer-img {
  width: 70%;
}
.founder,
.co-founder,
.developer {
  justify-content: center;
  align-items: center;
  width: 300px;
}

/* footer */
.footer {
  width: 100%;
  height: 300px;
  background-color: rgba(71, 0, 0, 0.6);
}
@media (min-width: 1905px) {
  .founder,
  .co-founder,
  .developer {
    margin: 2vh 3vw;
  }
  .about-banner {
    margin: 8vh;
  }
  .cards img {
    width: 120%;
  }
  .cards {
    column-gap: 100px;
  }
  .about-discription {
    font-size: 30px;
  }
  .teams {
    font-size: large;
    width: 120%;
  }
}
@media (max-width: 1200px) {
  .about-discription {
    padding: 5vh 5vw;
    font-size: 16px;
    margin: 0vh 4vw;
  }
  .cards {
    /* margin-right: 1vw; */
    align-items: center;
    /* width: 95%; */
    margin: 10vh 30vh;
  }
  .cards img {
    width: 75%;
  }
  .teams {
    margin: 0 2vw;
  }
  .founder,
  .co-founder,
  .developer {
    margin: 2vh 1vw;
  }
}
@media (max-width: 992px) {
  .about-discription {
    width: 70%;
  }
  .cards {
    display: flex;
    /* flex-direction: column; */
    width: 90%;
    /* padding-top: 0vh;
    margin-top: 40vh; */
  }
  .cards img {
    width: 100%;
  }
  .teams {
    margin: 0 0;
  }
}
@media (max-width: 768px) {
  .about-discription {
    width: 80%;
  }
  .cards {
    /* display: flex;
    flex-direction: column; */
    grid-template-columns: 1fr;
    /* margin: vh 5vh; */
  }

  .card {
    margin-bottom: 20px;
  }

  .card-img {
    max-width: 100%;
  }
}

@media (max-width: 700px) {
  .cards img {
    width: 70%;
  }
  .cards {
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 340px) {
  .cards img {
    width: 65%;
  }
  .cards {
    margin: 15vh 5vh;
  }
  .teams {
    margin: 0 6vw;
  }
}
</style>
