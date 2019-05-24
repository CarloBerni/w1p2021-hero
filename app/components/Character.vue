<template>
  <div class="big-header">
    <h1>{{message}}</h1>
    <br>
    <audio autoplay>
      <source src="../assets/sound/coup-depee.mp3">
    </audio>
    <div class="imageMec">
      <img src="../assets/image/mec.png">
    </div>
    <ul>
      <li>
        <router-link class="button" to="/game/1">Gladius</router-link>
      </li>
      <li>
        <router-link class="button" to="/game/2">Flavius</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import data from "../data.json";
export default {
  data() {
    return {
      message:
        "Pour avancer dans votre aventure, il vous faudra faire des choix qui seront parfois décisifs pour votre survie. Commençons simplement, quel est votre nom ?"
    };
  }
};
</script>

<style lang="scss" scoped >
.big-header {
  background-image: url("../assets/image/background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

img {
  position: absolute;
  left: 50px;
  top: 30%;
  height: 600px;
}

</style>
