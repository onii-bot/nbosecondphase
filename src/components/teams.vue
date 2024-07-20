<template>
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
          <h2 class="card-title">{{ card.title }}</h2>
          <!-- <p>{{ card.description }}</p> -->
        </div>
        <div class="details-panel" v-if="showDetailsIndex === index">
          <!-- <p>Additional details:</p> -->

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
  /* padding-top: 2rem; */
}
.card-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
}

.card {
  border: 1px solid #ccc;
  margin: 1rem 1rem 2rem 1rem;
  padding: 0;
  cursor: pointer;
  color: white;
  position: relative;
  transition: transform 0.3s ease, z-index 0.3s ease;
  overflow: hidden;
  border-radius: 10px;
}

.card-selected {
  transform: scale(1.2);
  z-index: 2;
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.card-title {
  border: 1px solid white;
  text-align: center;
  padding: 0.5rem;
  font-size: 1.5rem;
}

.card-content {
  padding: 15px;
  transition: opacity 0.3s ease;
  z-index: 1;
  color: white;
}

.hidden {
  opacity: 0;
}

.details-panel {
  background: black;
  padding: 15px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  position: absolute;
  bottom: -13px;
  left: -4px;
  text-align: justify;
  border-top: 1px solid #ccc;
}

.card-selected .details-panel {
  max-height: 300px;
}

@media (max-width: 768px) {
  .card-wrapper {
    width: 100%;
  }
  .details-panel {
    position: absolute;
    bottom: -1px;
    left: -6px;
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
    position: absolute;
    bottom: -11px;
    left: -10px;
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
    padding: 1rem;
  }
  .card-selected {
    transform: scale(1.1);
  }
  .card-content {
    padding: 20px;
  }

  .details-panel {
    padding-top: 10px;
    position: absolute;
    bottom: 15px;
    left: -7px;
  }

  .card-image {
    max-width: 100%;
  }
}

@media (max-width: 376px) {
  .details-panel {
    position: absolute;
    bottom: 0px;
    left: -7px;
  }
}
</style>
