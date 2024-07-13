<template>
  <div class="wallet-checker-main">
    <p class="wallet-p">Check your wallet</p>
    <div class="wallet-checker">
      <input
        type="text"
        v-model="inputWallet"
        placeholder="Enter wallet address"
      />
      <button @click="checkWallet" class="button-p">Submit</button>
    </div>
    <div v-if="showResult" class="result">{{ result }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storedWallets } from "./../walletData";

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
input[type="text"] {
  width: 80%;
  padding: 2vh;
  margin-right: 3vh;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin-bottom: 2vh;
  text-align: center;
}
.wallet-checker-main .wallet-p {
  color: #eeff07;
  font-size: 20px;
  font-weight: 700;
}
@media (max-width: 1024px){
  .wallet-checker-main .wallet-p {
  
  font-size: 16px;
  font-weight: 700;
   }

}
@media (max-width: 768px) {
  .button-p {
    display: block;
    margin: 0 auto;
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
