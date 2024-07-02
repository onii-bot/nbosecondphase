<template>
  <div class="wallet-checker-main">
    <p class="wallet-p">Check your wallet</p>
    <div class="wallet-checker">
      <input type="text" v-model="inputWallet" placeholder="Enter wallet address" />
      <button @click="checkWallet">Submit</button>
    </div>
    <p v-if="showResult">{{ result }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storedWallets } from '/src/walletData.js'
const inputWallet = ref('')
const showResult = ref(false)
const result = ref('')

const checkWallet = () => {
  const found = storedWallets.some((wallet) => {
    return wallet === inputWallet.value
  })

  if (found) {
    result.value = 'Wallet available!'
  } else {
    result.value = 'Wallet not available'
  }
  showResult.value = true
}
</script>

<style>
input[type='text'] {
  width: 80%;
  padding: 2vh;
  margin-right: 3vh;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin-bottom: 2vh;
  text-align: center;
}

button {
  background-color: #700000;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 13vh;
  height: 7vh;
}

button:hover {
  background-color: #600000;
}
</style>
