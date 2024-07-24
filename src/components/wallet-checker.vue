<template>
  <div class="background"></div>
  <div class="background-mob"></div>
  <div class="wallet-checker-main">
    <p class="wallet-p">Check your wallet</p>
    <div class="wallet-checker">
      <input
        type="text"
        v-model="inputWallet"
        placeholder="Enter wallet address"
      />
    </div>
    <button @click="checkWallet" class="button-p">Submit</button>
    <div v-if="showResult" class="result">{{ result }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storedWallets } from "../walletData";

const inputWallet = ref("");
const showResult = ref(false);
const result = ref("");

const checkWallet = () => {
  const found = storedWallets.includes(inputWallet.value);
  console.log("Checking wallet:", inputWallet.value);
  console.log("Stored wallets:", storedWallets);

  result.value = found ? "Wallet available!" : "Wallet not available!!!";
  showResult.value = true;
  inputWallet.value = "";
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: none;
  font-family: "Bangers", system-ui;
}
.background {
  position: absolute;
  top: 5%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/bannar_1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  opacity: 0.4; /* Adjust the opacity here */
  z-index: 1; /* Ensure the background is behind other content */
}
.background-mob {
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/mobo.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  opacity: 0.4; /* Adjust the opacity here */
  z-index: 1; /* Ensure the background is behind other content */
  display: none;
}

.wallet-checker-main {
  margin: 16vw;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 11;
}
input[type="text"] {
  width: 50%;
  padding: 2vh;
  border: 1px solid #ccc;
  border-radius: 15px;
  text-align: center;
  color: black;
  margin-bottom: 1rem;
}
.wallet-checker-main .wallet-p {
  color: #eeff07;
  font-size: 2rem;
  font-weight: 700;
  z-index: 111;
  padding: 2rem;
}
@media (max-width: 1024px) {
  .wallet-checker-main .wallet-p {
    font-size: 1rem;
    font-weight: 700;
  }
}
@media (max-width: 768px) {
  .wallet-checker-main {
    margin-top: 24vw;
  }
  .button-p {
    display: block;
    margin: 0 auto;
  }
  input[type="text"] {
    width: 60%;
  }
}
@media (max-width: 556px) {
  input[type="text"] {
    width: 100%;
  }

  .background {
    display: none;
  }
  .background-mob {
    display: block;
  }
}
@media (max-width: 556px) {
  .wallet-checker-main {
    margin-top: 48vw;
  }
}

button {
  background-color: #900000;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 13vh;
  height: 7vh;
}
.button-p {
  text-align: center;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
}
button:hover {
  background-color: #600000;
}
.result {
  font-size: large;
  color: white;
  padding-top: 2vh;
}
</style>
