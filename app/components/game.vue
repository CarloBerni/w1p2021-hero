<template>
  <div class="big-header">
    <h1>{{step.title}}</h1>
    <li v-for="action in step.actions" v-bind:action="action" v-bind:key="action.title">
      <router-link class="button" :to="action.to.toString()">{{ action.title }}</router-link>
    </li>
  </div>
</template>


<script>
import game from "../data.json";

export default {
  data: function() {
    return {
      step: this.getStep(),
    };
  },
  watch: {
    "$route.params.id"(to, from) {
      this.step = this.getStep();
    }
  },

  methods: {
    getStep() {
      return game.steps.find(step => {
        return step.id === parseInt(this.$route.params.id, 10);
      });
    }
  }
};
</script>
<style scoped>
.big-header {
  background-image: url("../assets/image/background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

h1 {
  position: absolute;
  top: 20%;
  left: 30%;
  color: black;
  margin-right: 150px;
  font-size: 30px;
}
</style>
