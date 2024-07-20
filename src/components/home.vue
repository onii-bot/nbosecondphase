<template>
  <div class="container">
    <div class="home-logo">
      <img src="@/assets/twitter_Cover2.webp" alt="" class="logo" />
    </div>
    <div class="home-images">
      <div class="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quidem
        dolorum, voluptates non voluptatum placeat laboriosam ducimus fuga
        quisquam sint vel, id quasi? Omnis, tenetur voluptatem iusto itaque sunt
        necessitatibus?
        <!-- <div class="description-1">This is the real life</div>
        <div class="description-1">This is the real life</div>
        <div class="description-1">This is the real life</div>
        <div class="description-1">This is the real life</div>
        <div class="description-1">This is the real life</div>
        <div class="description-1">This is the real</div> -->
      </div>

      <div class="images">
        <img src="@/assets/26.webp" alt="" />
        <img src="@/assets/52.webp" alt="" />
        <img src="@/assets/185.webp" alt="" />
        <img src="@/assets/460.webp" alt="" />
        <img src="@/assets/1101.webp" alt="" />
        <img src="@/assets/1110.webp" alt="" />
        <img src="@/assets/1144.webp" alt="" />
        <img src="@/assets/1146.webp" alt="" />
        <img src="@/assets/1374.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: white;
  font-family: Arial, sans-serif;
}

.logo {
  width: 100%;
  max-width: 35rem;
  height: auto;
  display: block;
  margin: 0 auto;
}

.container {
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 5rem;
}

.home-logo {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.home-images {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 20px;
  /* width: 90%; */
  /* padding-top: 3rem; */
  padding-left: 10rem;
  margin: auto;
  align-items: start;
}

.description {
  line-height: 2em;
  color: white;
  font-family: var(--font-header);
  font-size: 1.8rem;
  text-align: start;
  padding: 0 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  max-width: 32rem;
  margin-bottom: 4rem;
  justify-content: center;
}

.images img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

@media (min-width: 1900px) {
  * {
    margin: 0;
    padding: 0;
  }
  .home-images {
    display: grid;
    /* grid-template-columns: 2fr 4.5fr; */
    grid-auto-rows: 1fr;
    gap: 2rem;
    /* align-items: center; */
    margin: 5rem 0 0 15rem;
  }
  .description {
    font-size: 2.3rem;
  }
}
@media (max-width: 1205px) {
  .home-images {
    grid-template-columns: 1fr;
    padding: 0;
  }
  .images {
    justify-self: center;
  }
  .description {
    padding-top: 0px;
    margin-bottom: 4rem;
    text-align: center;
  }
}
@media (max-width: 900px) {
  .images {
    justify-self: center;
  }
  .description {
    font-size: 1.5rem;
  }
}

@media (max-width: 600px) {
  .description {
    font-size: 1.4rem;
  }
  .images {
    justify-content: center;
  }
}
</style>
