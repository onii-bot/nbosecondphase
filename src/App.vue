<script setup lang="ts">
import navbar from './components/navbar.vue'
</script>

<template>
  <navbar />
  <RouterView />
</template>

<style>
body {
  /* background: linear-gradient(to left, #000000 0%, #1c0000 28%, #2c0101 82%, #410101 100%); */

  background-color: black;
  font-family: 'Cormorant Unicase', serif;
}
</style>
