<template>
  <Form/>
</template>





<script>
import Form from "./components/Form.vue";
export default {
  components: { Form },
  data() {
    return {
      title: "Lost and be Awoken",
      title2: "Welcome to Vue",
      para1: "Zingers is home",
      showModal: false,
      showModal2: false
    };
  },

  methods: {
    handleClick() {
      this.$refs.name.classList.add("active");
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    }
  }
};
</script>
























<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
p {
  font-size: 3rem;
}
.active {
  background-color: red;
}
</style>
