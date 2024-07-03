<template>
  <div class="container">
    <div class="heading">
      <div class="heading-1">NEW BITCOIN ORDER</div>
      <div class="heading-2">ORDINALS COLLIECTION</div>
    </div>
    <div class="discription">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
    </div>

    <div class="'wallet-checker'">
      <walletchecker />
      <RouterView />
    </div>
    <img class="skull" src="@/assets/skull.png" alt="" />

    <img class="hero_1" src="@/assets/heroimg.png" alt="" />
    <img class="hero_2" src="@/assets/heroimg.png" alt="" />
    <img class="hero_3" src="@/assets/heroimg.png" alt="" />
    <img
      class="launchpad_banner"
      src="@/assets/Launchpad_Banner_3.png"
      alt=""
    />
  </div>
</template>

<script setup>
import walletchecker from "../components/walletchecker.vue";
</script>
<style>
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  /* overflow-x: hidden;
  overflow-y: hidden; */
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 2vh;
}
.heading {
  text-align: center;
  font-size: xx-large;
  color: #ffff;
  margin-top: 7vh;
}
.heading-1 {
  background: linear-gradient(
    to right,
    #e00000 0%,
    #e40b0b 38%,
    #ffff 76%,
    #1c0001 100%
  );
  color: #e00000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-weight: 900;
}
.heading-2 {
  font-size: x-large;
}
.discription {
  color: #f2f2f2;
  text-align: center;
  width: 50%;
  margin: 2vh 0;
  flex-shrink: 1;
}

.wallet-checker-main {
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: 20vh;
  width: 60vh;
  /* display: flex; */
  z-index: 1;
}

.wallet-checker > * {
  box-sizing: border-box;
  flex-direction: column;
}
.wallet-p {
  font-size: large;
  color: #ffff;
}

@keyframes rotateClockwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotateAnticlockwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.hero_1 {
  opacity: 0.3;
  position: absolute;
  width: 100vh;
  top: 5vh;
  left: 50vh;
  z-index: -10;
  animation: rotateAnticlockwise 80s linear infinite;
}
.hero_2 {
  opacity: 0.2;
  position: absolute;
  width: 120vh;
  top: -5vh;
  left: 40vh;
  z-index: -9;
  animation: rotateClockwise 100s linear infinite;
}
.hero_3 {
  opacity: 0.1;
  position: absolute;
  width: 140vh;
  top: -14vh;
  left: 30vh;
  z-index: -9;
  animation: rotateAnticlockwise 120s linear infinite;
}
.launchpad_banner {
  width: 100%;
  position: absolute;
  top: 10vh;
  z-index: -1;
  opacity: 0.4;
}
.skull {
  position: absolute;
  top: 10vh;
  left: 2vh;
}
@media (max-width: 1200px) {
  .discription {
    width: 60%;
  }

  .skull {
    position: absolute;
    top: 10vh;
    left: 2vh;
  }
}

@media (max-width: 992px) {
  .discription {
    width: 70%;
  }
  .skull {
    position: absolute;
    top: 10vh;
    left: 2vh;
  }
  .hero_1,
  .hero_2,
  .hero_3 {
    display: none;
  }
  /* .container {
    background-image: url("@/assets/bg.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  } */
}
@media (max-width: 768px) {
  .skull {
    position: absolute;
    top: 8vh;
    left: 1vh;
  }
  .discription {
    width: 80%;
  }
  .wallet-checker-main input {
    width: 60%;
    margin-left: 8vh;
  }
}

@media (max-width: 576px) {
  body {
    justify-content: center;
    align-items: center;
  }

  .discription {
    width: 90%;
    height: 50%;
    text-align: justify;
    margin-left: 6vh;
    text-align: center;
  }
  .heading {
    margin-left: 6vh;
  }
  .skull {
    width: 8vh;
    top: 8vh;
    left: 2vh;
  }
  .wallet-checker {
    box-sizing: border-box;
  }
  .wallet-checker-main input {
    width: 70%;
    margin-left: 8vh;
  }
  .launchpad_banner {
    width: 100%;
    position: absolute;
    top: 10vh;
    left: 2vh;
    z-index: -1;
    opacity: 0.4;
  }
  .wallet-checker-main button {
    margin-left: 4vh;
  }
}
@media (min-width: 320px) and (max-width: 424px) {
  .heading {
    margin-left: 6vh;
  }

  .skull {
    display: none;
  }

  .wallet-p {
    margin-left: 3vh;
  }
  .wallet-checker-main button {
    margin-left: 4vh;
  }
  .launchpad_banner {
    width: 100%;
    position: absolute;
    top: 10vh;
    left: 3vh;
    z-index: -1;
    opacity: 0.4;
  }
  .discription {
    width: 100%;
    height: 50%;
    margin-left: 5.5vh;
    text-align: center;
  }
}
</style>
