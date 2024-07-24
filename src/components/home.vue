<template>
  <div class="container">
    <div class="background"></div>
    <div class="home-logo">
      <img src="@/assets/logoo.png" alt="" class="logo" />
    </div>
    <div class="home-images">
      <div class="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quidem
        dolorum, voluptates non voluptatum placeat laboriosam ducimus fuga
        quisquam sint vel, id quasi? Omnis, tenetur voluptatem iusto itaque sunt
        necessitatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quidem
        dolorum, voluptates non voluptatum placeat laboriosam ducimus fuga
        quisquam sint vel, id quasi? Omnis, tenetur voluptatem iusto itaque sunt
        necessitatibus?
      </div>

      <div class="images">
        <img src="@/assets/26.webp" alt=""  class="hover"/>
        <img src="@/assets/52.webp" alt="" class="hover" />
        <img src="@/assets/185.webp" alt=""  class="hover"/>
        <img src="@/assets/460.webp" alt=""  class="hover"/>
        <img src="@/assets/1101.webp" alt=""  class="hover"/>
        <img src="@/assets/1110.webp" alt=""  class="hover"/>
        <img src="@/assets/1144.webp" alt=""  class="hover"/>
        <img src="@/assets/1146.webp" alt=""  class="hover"/>
        <img src="@/assets/1374.webp" alt=""  class="hover"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: none;
  font-family: "Bangers", system-ui;
}



.logo {
  width: 100%;
  max-width: 35rem;
  height: auto;
  display: block;
  margin: 0 auto;
  z-index: 99;
  position: absolute;
  top: 0;
  
  
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
  padding: 6rem  0rem 3rem;
  margin-top: 4rem;
  z-index: 11;
  position: relative;
}
.background {
  position: absolute;
  top:5%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/bannar_1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  opacity: 0.15; /* Adjust the opacity here */
  z-index: 1; /* Ensure the background is behind other content */
}
.home-images {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 20px;
  /* width: 90%; */
  /* padding-top: 3rem; */
  padding-left: 10rem;
  margin: auto;
  z-index: 11;
  align-items: start;
}

.description {
  line-height: 2em;
  letter-spacing:0.08em;
  font-family: var(--font-header);
  font-size: 1.4rem;
  text-align: start;
  padding: 3rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 1.4;
}

.images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  max-width: 32rem;
  margin-bottom: 4rem;
  justify-content: center;
}
.hover{
  width: 100%;
    height: auto;
    transition: transform 0.3s ease; /* Smooth transition */
}

/* Transform the image on hover */
.hover:hover {
  transform: scale(1.2); /* Scale up the image */
  border-radius: 5px solid white;

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
    padding: 0rem 4rem;
    margin-bottom: 4rem;
    text-align: center;
    font-size: 1.2rem;
  }
}
@media (max-width: 900px) {
  .images {
    justify-self: center;
  }
  .description {
    font-size: 1.1rem;
  }
}

@media (max-width: 600px) {
  .home-logo{
    padding: 4rem  0rem 2rem;
     margin-top: 4rem;
  }
  .description {
    padding: 0rem 1rem;
    font-size: 1rem;
  }
  .images {
    justify-content: center;
    gap: 0.4rem;
    max-width: 20rem;
  }
  .background{
    opacity: 0.1;
  }
}
</style>
