<!-- version3/////////////////////click only-->
<!-- <template>
  <div class="team-heading">TEAMS</div>
  <div class="teams-container" @click="deselectCard">
    <div class="card-wrapper" v-for="(card, index) in cards" :key="index">
      <div
        class="card"
        :class="{ 'card-selected': showDetailsIndex === index }"
        @click.stop="toggleDetails(index)"
      >
        <img :src="card.image" alt="Card Image" class="card-image" />
        <div
          class="card-content"
          :class="{ hidden: showDetailsIndex === index }"
        >
          <div class="card-title">{{ card.title }}</div>
        </div>
        <div class="details-panel" v-if="showDetailsIndex === index">
          <div v-for="(detail, i) in card.details" :key="i">{{ detail }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/founder.webp";
import image2 from "@/assets/collab-manager.webp";
import image3 from "@/assets/logo.webp";

export default {
  data() {
    return {
      showDetailsIndex: null,
      cards: [
        {
          title: "Founder",
          description: "Card Description 1",
          image: image1,
          details: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quidem dolorum, voluptates non voluptatum placeat laboriosam ducimus fuga quisquam sint vel, id quasi? Omnis, tenetur voluptatem iusto itaque sunt necessitatibus?",
          ],
        },
        {
          title: "Collab Manager",
          description: "Card Description 2",
          image: image2,
          details: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quidem dolorum, voluptates non voluptatum placeat laboriosam ducimus fuga quisquam sint vel, id quasi? Omnis, tenetur voluptatem iusto itaque sunt necessitatibus?",
          ],
        },
        {
          title: "Co-Founder",
          description: "Card Description 3",
          image: image3,
          details: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quidem dolorum, voluptates non voluptatum placeat laboriosam ducimus fuga quisquam sint vel, id quasi? Omnis, tenetur voluptatem iusto itaque sunt necessitatibus?",
          ],
        },
      ],
    };
  },
  methods: {
    toggleDetails(index) {
      this.showDetailsIndex = this.showDetailsIndex === index ? null : index;
    },
    deselectCard() {
      this.showDetailsIndex = null;
    },
  },
};
</script>

<style scoped>
.teams-container {
  display: flex;
  flex-wrap: wrap;
  margin: 6rem;
  justify-content: center;
  gap: 20px;
}

.team-heading {
  text-align: center;
  color: red;
  font-size: 2rem;
  position: relative;
  top: 3rem;
  left: 0rem;
}

.card-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 340px;
}

.card {
  margin: 1rem;
  padding: 0;
  cursor: pointer;
  color: white;
  position: relative;
  transition: transform 0.3s ease, z-index 0.3s ease;
  overflow: hidden;
  border-radius: 10px;
}

.card-selected {
  transform: scale(1.05);
  z-index: 2;
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.card-title {
  text-align: center;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: 1px solid white;
}

.card-content {
  padding: 15px;
  transition: opacity 0.3s ease;
  z-index: 1;
  color: white;
}

.details-panel {
  background: black;
  padding: 5px 10px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  position: relative;
  top: 0;
  text-align: justify;
}

.card-selected .details-panel {
  max-height: 300px;
  border: 2px solid white;
}

.card-selected .card-title {
  border: none;
}

@media (max-width: 768px) {
  .card-wrapper {
    width: 100%;
  }
  .details-panel {
    position: relative;
    top: 0;
  }
  .team-heading {
    font-size: 1.6rem;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .card-wrapper {
    width: calc(50% - 10px);
  }
  .details-panel {
    position: relative;
    top: 0;
  }
  .team-heading {
    font-size: 1.8rem;
  }
}

@media (min-width: 1201px) {
  .card-wrapper {
    width: calc(33.33% - 20px);
  }
}

@media (max-width: 500px) {
  .card-wrapper {
    max-width: 100%;
  }

  .card {
    margin: 1rem -2.5rem;
    padding: 10px;
  }

  .card-title {
    font-size: 1.2rem;
    padding: 0.5rem;
  }
  .card-selected {
    transform: scale(1.05);
  }
  .card-content {
    padding: 10px;
  }

  .details-panel {
    padding-top: 5px;
    position: relative;
    top: 0;
  }

  .card-image {
    max-width: 100%;
  }
}

@media (max-width: 376px) {
  .details-panel {
    position: relative;
    top: 0;
  }
}
</style> -->

<!--///////////////////////// version4 for both hover and click /////////////////////////////////////////-->

<template>
  <div class="background"></div>
  <div class="team-heading">TEAMS</div>
  <div class="teams-container" @click="deselectCard">
    <div class="card-wrapper"
    :class="{
      'card-selected': showDetailsIndex === index || hoverIndex === index,
    }"
    @mouseenter="startHover(index)"
    @mouseleave="resetHover"
    @click.stop="toggleDetails(index)"
     v-for="(card, index) in cards" :key="index">
      <div
        class="card"
  
      >
        <img :src="card.image" alt="Card Image" class="card-image" />
        <div
          class="card-content"
          :class="{ hidden: showDetailsIndex === index }"
        >
          <div class="card-title">{{ card.title }}</div>
        </div>
        <div
          class="details-panel"
          v-if="showDetailsIndex === index || hoverIndex === index"
        >
          <div v-for="(detail, i) in card.details" :key="i">{{ detail }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/founder.webp";
import image2 from "@/assets/collab-manager.webp";
import image3 from "@/assets/logo.webp";

export default {
  data() {
    return {
      showDetailsIndex: null,
      hoverIndex: null,
      hoverTimeout: null,
      cards: [
        {
          title: "Founder",
          description: "Card Description 1",
          image: image1,
          details: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quidem dolorum, voluptates non voluptatum placeat laboriosam ducimus fuga quisquam sint vel, id quasi? Omnis, tenetur voluptatem iusto itaque sunt necessitatibus?",
          ],
        },
        {
          title: "Collab Manager",
          description: "Card Description 2",
          image: image2,
          details: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quidem dolorum, voluptates non voluptatum placeat laboriosam ducimus fuga quisquam sint vel, id quasi? Omnis, tenetur voluptatem iusto itaque sunt necessitatibus?",
          ],
        },
        {
          title: "Co-Founder",
          description: "Card Description 3",
          image: image3,
          details: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quidem dolorum, voluptates non voluptatum placeat laboriosam ducimus fuga quisquam sint vel, id quasi? Omnis, tenetur voluptatem iusto itaque sunt necessitatibus?",
          ],
        },
      ],
    };
  },
  methods: {
    toggleDetails(index) {
      this.showDetailsIndex = this.showDetailsIndex === index ? null : index;
    },
    deselectCard() {
      this.showDetailsIndex = null;
    },
    startHover(index) {
      this.hoverTimeout = setTimeout(() => {
        this.hoverIndex = index;
      }, 100);
    },
    resetHover() {
      clearTimeout(this.hoverTimeout);
      this.hoverIndex = null;
    },
  },
};
</script>

<style scoped>
*{
  font-family: "Bangers", system-ui;
}
.teams-container {
  display: flex;
  flex-wrap: wrap;
  margin: 6rem;
  justify-content: center;
  gap: 20px;
  
}
.background {
  position: absolute;
  top:5%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/baner_2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  opacity: 0.1; /* Adjust the opacity here */
  z-index: 1; /* Ensure the background is behind other content */
}

.team-heading {
  text-align: center;
  color: #E4303C;
  font-size: 2rem;
  position: relative;
  top: 3rem;
  left: 0rem;
}

.card-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  z-index: 10;
  max-width: 340px; /* Reduced max width */
  
  
  
}

.card {
  margin: 1rem;
  padding: 0;
  cursor: pointer;
  position: relative;
  transition: transform 0.5s ease, z-index 0.5s ease; /* Adjusted transition duration */
  overflow: hidden;
  border-radius: 10px;
}

.card-selected {
  transform: scale(1.05); /* Reduced scaling */
  z-index: 2;
  border: 1px solid white;
  border-radius: 10px;
  background-color:#101010;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 
              0 6px 20px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.card-title {
  text-align: center;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: 1px solid white;
}

.card-content {
  padding: 16px;
  transition: opacity 0.5s ease; /* Adjusted transition duration */
  z-index: 1;
  font-size: 1rem;

}

.details-panel {
  
  padding: 5px 10px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out; /* Adjusted transition duration */
  position: relative;
  top: 0;
  text-align: justify;
  font-size: 1rem;
  letter-spacing: 0.08em;
  line-height: 1.4em;
}

.card-selected .details-panel {
  max-height: 300px;

  
}

.card-selected .card-title {
  border: none;
  color: #E4303C;
}


@media (max-width: 768px) {
  .card-wrapper {
    width: 100%;
  }
  .details-panel {
    position: relative;
    top: 0;
  }
  .team-heading {
    font-size: 1.6rem;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .card-wrapper {
    width: calc(50% - 10px);
  }
  .details-panel {
    position: relative;
    top: 0;
  }
  .team-heading {
    font-size: 1.8rem;
  }
}

@media (min-width: 1201px) {
  .card-wrapper {
    width: calc(33.33% - 20px);
  }
}

@media (max-width: 500px) {
  
  .card-wrapper {
    max-width: 100%;
  }
.teams-container{
  margin: 60px;
}

  .card {
    padding: 10px;
  }

  .card-title {
    font-size: 1.2rem;
    padding: 0.5rem;
  }
  .card-selected {
    transform: scale(1.05); /* Adjust scaling for smaller media */
    margin-top: 1rem;
  }
  .card-content {
    padding: 10px;
  }

  .details-panel {
    padding-top: 5px;
    position: relative;
    top: 0;
  }

  .card-image {
    max-width: 100%;
  }
}

@media (max-width: 376px) {
  .details-panel {
    position: relative;
    top: 0;
  }
  .teams-container{
    margin: 36px;
  }
  .card-selected {
    transform: scale(1.04); /* Adjust scaling for smaller media */
    margin-top: 2rem;
  }
}
</style>
