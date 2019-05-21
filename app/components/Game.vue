<template>
  <div class="big-header" v-bind:style="{ backgroundImage: 'url(' + step.background + ')' }">
    <h1>{{step.title}}</h1>
    <img class="perso" v-bind:src="step.img">
    <div class="force-agilite"></div>
    <ul>
      <li v-for="action in step.actions" v-bind:action="action" v-bind:key="action.title">
        <router-link class="button" :to="action.to.toString()">{{ action.title }}</router-link>
        <img v-bind:src="action.img">
      </li>
    </ul>
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
<style lang="scss" scoped>
.big-header {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
.perso {
  position: absolute;
  left: 50px;
  top: 30%;
  height: 600px;
}
ul {
  display: flex;
  img {
    height: 500px;
  }
}
</style>


