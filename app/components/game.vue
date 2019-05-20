<template>
  <div class="big-header">
    <h1>{{game1.text}}</h1>
    <br />
    <router-link class="button" to="/game/1">agilité</router-link>
    <router-link class="button" to="/game/1">force</router-link>

  </div>
</template>

<script>
import data from '../data.json';
export default {
data() {
      return {
      step : data.game[this.$route.params.id],
        game1: data.game[1],
      }
  
}

};
</script>
<style scoped>
/*

.big-header {
  background-image: url("../assets/image/background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;*/
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
