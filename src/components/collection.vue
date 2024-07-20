<template>
  <div class="container">
    <h1>Latest NFTs from Magic Eden</h1>
    <ul v-if="nfts && nfts.length > 0">
      <li v-for="nft in nfts" :key="nft.id">
        <img :src="nft.image_url" alt="NFT Image" style="max-width: 200px" />
        <p>
          <strong>{{ nft.name }}</strong>
        </p>
        <p>Price: {{ nft.price }}</p>
        <p>Description: {{ nft.description }}</p>
      </li>
    </ul>
    <p v-else>No NFTs found.</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nfts: [], // Initialize as an empty array
    };
  },
  mounted() {
    axios
      .get("/api/v1/nfts")
      .then((response) => {
        console.log("API response:", response.data);
        this.nfts = response.data.data; // Ensure this assignment matches the structure
      })
      .catch((error) => {
        console.error("Error fetching data from Magic Eden API:", error);
      });
  },
};
</script>

<style scoped>
.container {
  color: white;
}
</style>
