<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Navbar from "./components/navbar.vue";
export default {
  name: "App",
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  background: transparent;
  background-color: black;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  margin-top: auto;
}
</style>
