<template>
  <div class="FAQ-container">
    <div class="header">
      <h1>FAQ</h1>
    </div>
    <div class="faq-items">
      <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
        <div class="question" @click="toggleAnswer(index)">
          <span class="arrow" v-if="faq.isActive">▲</span>
          <span class="arrow" v-else>▼</span>
          <span class="question-text">{{ faq.question }}</span>
        </div>
        <div class="answer" v-if="faq.isActive">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      faqs: [
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, accusamus?",
          isActive: false,
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, accusamus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, accusamus?",
          isActive: false,
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, accusamus",
          isActive: false,
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, accusamus?",
          isActive: false,
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, accusamus?",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].isActive = !this.faqs[index].isActive;
    },
  },
};
</script>

<style scoped>

.FAQ-container {
  width: min(70rem, 80%);
  padding: 0 10%;
  margin: auto;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.08em;
  
  
  
}

h1 {
  font-family: "Bangers", system-ui;
  color:#E4303C;
  text-align: start;
  font-size: 2rem;
  font-weight: 400;
  margin: 1rem 1rem;
}

.faq-item {
  margin-bottom: 2rem;
}

.question {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.2rem;
  padding-left: 1rem;
}

.arrow {
  margin-right: 10px;
}

.question-text {
  font-weight: bold;
}

.answer {
  margin: 1rem 0rem 0rem 3rem;
  padding: 1rem;
  font-size: 1rem;
  background-color: #141414;
  color: rgb(255, 252, 252);
}

.answer.active {
  display: block;
  
}
</style>
