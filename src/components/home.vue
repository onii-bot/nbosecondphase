<template>
  <div class="container">
    <div class="heading">
      <div class="heading-1">NEW BITCOIN ORDER</div>
      <div class="heading-2">ORDINALS COLLECTION</div>
    </div>
    <div class="description">
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

    <div class="wallet-checker">
      <walletchecker />
      <router-view />
    </div>
    <!-- Rotating hero images -->
    <div class="hero">
      
      <img class="hero_1" src="@/assets/heroimg.webp" alt="" />
      <img class="hero_2" src="@/assets/heroimg.webp" alt="" />
      <img class="hero_3" src="@/assets/heroimg.webp" alt="" />
    </div>

    <img
      class="launchpad_banner"
      src="@/assets/Launchpad_Banner_3.webp"
      alt=""
    />
    <img
      class="mobile_banner"
      src="@/assets/banner_mobile.jpg"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import walletchecker from "../components/walletchecker.vue";
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2vh;
  font-size: 16px;
  text-align: center;
  position: relative; /* Ensure container for z-index stacking */
}

.heading {
  
  color: #fff;
  margin-top: 7vh;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.heading-1 {
  background: linear-gradient(
    to right,
    #e00000 0%,
    #e40b0b 40%,
    #fcfc4c 50%,
    #bc0707 100%
  );
  font-size: 2em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.heading-2 {
  font-size: 1.5em;
}

.description {
  color: #f2f2f2;
  max-width: 900px;
  margin: 2vh;
  padding: 0;
  line-height: normal;
  
}

.wallet-checker {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
 
}

.wallet-checker > * {
  box-sizing: border-box;
  flex-direction: column;
}

.wallet-p {
  font-size: 1.2em;
  color: #fff;
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
  animation: rotateAnticlockwise 120s linear infinite;
}
.hero_2 {
  opacity: 0.2;
  position: fixed;
  width: 60%;
  top: 1vw;
  left: 20vw;
  z-index: -9;
  animation: rotateClockwise 160s linear infinite;
}
.hero_3 {
  opacity: 0.1;
  position: fixed;
  width: 69%;
  top: -4vw;
  left: 16vw;
  z-index: -9;
  animation: rotateAnticlockwise 200s linear infinite;
}
.launchpad_banner {
  width: 100%;
  position: fixed;
  top: 8vw;
  z-index: -1;
  opacity: 0.4;
}
.mobile_banner{
  display: none;
  opacity: 0.3;
  position: fixed;
  z-index: -10;
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

@media (max-width: 1200px) {
  
  .hero_1 {
    width: 48%;
    top: 7vw;
    left: 26vw;
  }
  .hero_2 {
    width: 57%;
    top: 3vw;
    left: 21vw;
  }
  .hero_3 {
    width: 65%;
    top: -1vw;
    left: 17vw;
  }
}
@media (max-width: 1024px) {
  .hero_1 {
    width: 52%;
    top: 5vw;
    left: 25vw;
  }
  .hero_2 {
    width: 65%;
    top: -1vw;
    left: 18vw;
  }
  .hero_3 {
    width: 76%;
    top: -6vw;
    left: 13vw;
  }
  .container{
    font-size: 14px;
  }
  .description{
    max-width: 800px;
  }
}
@media (max-width: 768px) {
  
  .description {
    padding: 0 5%;
  }
  .wallet-checker-main input {
    width: 70%;
    margin-left: 5vh;
  }
  .hero_1 {
    width: 52%;
    top: 5vw;
    left: 25vw;
  }
  .hero_2 {
    width: 64%;
    top: 0vw;
    left: 19vw;
  }
  .hero_3 {
    width: 81%;
    top: -7vw;
    left: 10vw;
  }
  .launchpad_banner {
    top: 8vw;
  }
}
@media (max-width: 576px) {
  
  .description {
    padding: 0 2%;
  }
  .wallet-checker-main input {
    width: 60%;
    margin-left: 4vh;
  }
  .wallet-checker-main button {
    margin-left: 4vh;
  }
  
  .hero_1{
    display: none;
  }
  .hero_2{
    top: 7vw;
    width: 150%;
    left: -25vw;
    opacity: 0.15;
  }
  .hero_3{
    top: -5vw;
    width: 180%;
    left: -38vw;
    opacity: 0.1;
  }
  .mobile_banner{
    display: block;
    width: 100%;
    top: -11vh;
  }
  .launchpad_banner {
    display: none;
  }
}
@media (max-width:426px) {
  
  .hero_2{
    top: 16vw;
    left: -25vw;
  }
  .hero_3{
    top: 2vw;
    width: 180%;
  }
  .mobile_banner{
    top: -5vh;
  }
  .container{
    font-size: 14px;
  }
}
@media (max-width:375px) {
  
  .hero_2{
    top: 32vw;
    left: -25vw;
  }
  .hero_3{
    top: 16vw;
    
  }
  .mobile_banner{
    top: 4vh;
  }
  
}
@media (max-width:320px) {
  .mobile_banner{
    top: 6vh;
  }
  .hero_2{
    top: 34vw;
    left: -25vw;
  }
  .hero_3{
    top: 18vw;
    
  }

  
}
</style>
