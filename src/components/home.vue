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
    <img
      class="launchpad_banner"
      src="@/assets/Launchpad_Banner_3.png"
      alt=""
    />
    <div class="hero">
      <img class="hero_1" src="@/assets/heroimg.png" alt="" />
      <img class="hero_2" src="@/assets/heroimg.png" alt="" />
      <img class="hero_3" src="@/assets/heroimg.png" alt="" />
      <!-- <img
        class="launchpad_banner"
        src="@/assets/Launchpad_Banner_3.png"
        alt=""
      /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
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
  /* position: absolute; */
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
    #e40b0b 40%,
    #fcfc4c 50%,
    #bc0707 100%
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
.skull {
  position: absolute;
  top: 10vh;
  left: 2vh;
}
.hero {
  position: absolute;
  min-width: 70%;
  margin-top: 10vh;
}
.hero_1 {
  opacity: 0.3;
  position: fixed;
  width: 50%;
  top: 6vw;
  left: 25vw;
  z-index: -10;
  animation: rotateAnticlockwise 80s linear infinite;
}
.hero_2 {
  opacity: 0.2;
  position: fixed;
  width: 60%;
  top: 1vw;
  left: 20vw;
  z-index: -9;
  animation: rotateClockwise 100s linear infinite;
}
.hero_3 {
  opacity: 0.1;
  position: fixed;
  width: 70%;

  top: -4vw;
  left: 15vw;
  z-index: -9;
  animation: rotateAnticlockwise 120s linear infinite;
}
.launchpad_banner {
  width: 100%;
  position: fixed;
  top: 8vw;
  z-index: -1;
  opacity: 0.4;
}
@media (min-width: 2001px) and (max-width: 2560px) {
  .discription {
    width: 50%;
    font-size: 32px;
  }
  .heading-1 {
    font-size: xx-large;
  }
  .nav-item {
    font-size: 32px;
  }
  .wallet-checker-main {
    font-size: 32px;
  }

  .skull {
    position: absolute;
    top: 10vh;
    left: 2vh;
  }
  .hero_1 {
    opacity: 0.3;
    position: fixed;
    width: 50%;
    top: 5vw;
    left: 25vw;
    z-index: -10;
    animation: rotateAnticlockwise 80s linear infinite;
  }
  .hero_2 {
    opacity: 0.2;
    position: fixed;
    width: 60%;
    top: 0vw;
    left: 20vw;
    z-index: -9;
    animation: rotateClockwise 100s linear infinite;
  }
  .hero_3 {
    opacity: 0.1;
    position: fixed;
    width: 70%;

    top: -5vw;
    left: 15vw;
    z-index: -9;
    animation: rotateAnticlockwise 120s linear infinite;
  }
}
@media (max-width: 2000px) {
  .discription {
    width: 50%;
  }
  .heading-1 {
    font-size: xx-large;
  }

  .skull {
    position: absolute;
    top: 10vh;
    left: 2vh;
  }
}
@media (max-width: 1600px) {
  .hero_1 {
  }
  .hero_2 {
  }
  .hero_3 {
  }
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
  .container {
    align-items: center;
  }
  .hero_1 {
    /* opacity: 0.3; */
    position: fixed;
    width: 48%;
    top: 7vw;
    left: 26vw;
    /* z-index: -10; */
    animation: rotateAnticlockwise 80s linear infinite;
  }
  .hero_2 {
    /* opacity: 0.2; */
    position: fixed;
    width: 57%;
    top: 3vw;
    left: 21vw;
    /* z-index: -9; */
    animation: rotateClockwise 100s linear infinite;
  }
  .hero_3 {
    /* opacity: 0.1; */
    position: fixed;
    width: 65%;

    top: -1vw;
    left: 17vw;
    /* z-index: -9; */
    animation: rotateAnticlockwise 120s linear infinite;
  }
}
@media (max-width: 1024px) {
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
  .hero_1 {
    /* opacity: 0.3; */
    position: fixed;
    width: 50%;
    top: 6vw;
    left: 25vw;
    /* z-index: -10; */
    animation: rotateAnticlockwise 80s linear infinite;
  }
  .hero_2 {
    /* opacity: 0.2; */
    position: fixed;
    width: 68%;
    top: -1vw;
    left: 17vw;
    /* z-index: -9; */
    animation: rotateClockwise 100s linear infinite;
  }
  .hero_3 {
    /* opacity: 0.1; */
    position: fixed;
    width: 83%;

    top: -8vw;
    left: 11vw;
    /* z-index: -9; */
    animation: rotateAnticlockwise 120s linear infinite;
  }
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
    width: 70%;
    margin-left: 5vh;
  }
  .hero_1,
  .hero_2,
  .hero_3 {
    display: none;
  }
  .launchpad_banner {
    position: absolute;
    width: 100%;
    top: -5vh;
    left: 0vh;
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
    width: 62%;
    margin-left: 9vh;
  }

  .launchpad_banner {
    width: 100%;
    position: absolute;
    top: -4vh;
    left: 3vh;
    z-index: -1;
    opacity: 0.4;
  }
  .wallet-checker-main button {
    margin-left: 4vh;
  }
  .wallet-p {
    margin-left: 7vw;
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
    margin-left: 6vh;
  }
  .wallet-checker-main input {
    width: 52%;
    /* margin-left: 9vh; */
  }
  .wallet-checker-main button {
    margin-left: 5vh;
  }
  .launchpad_banner {
    width: 100%;
    position: absolute;
    top: 4vh;
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
@media (max-width: 320px) {
  .launchpad_banner {
    position: absolute;
    top: 6vh;
    left: 3vh;
  }
}
</style>
