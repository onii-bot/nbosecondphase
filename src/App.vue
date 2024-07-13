<script setup>
import navbar from "./components/navbar.vue";
</script>

<template>
  <navbar />
  <router-view />
</template>

<style>


body {
  /* background: linear-gradient(to left, #000000 0%, #1c0000 28%, #2c0101 82%, #410101 100%); */

  background-color: black;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
}
</style>
