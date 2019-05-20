<template>
  <div class="big-header">
    <h1>{{message}}</h1>
    <br>
    <div class="characterbox">
      <router-link class="button" to="/game">Gladius</router-link>
      <router-link class="button" to="/game">Flavius</router-link>
    </div>
  </div>
</template>


<script>
import data from "../data.json";
export default {
  data() {
    return {
      character1: data.character[1],
      character2: data.character[2],
      message:
        "Pour avancer dans votre aventure, il vous faudra faire des choix qui seront parfois décisifs pour votre survie. Commençons simplement, quel est votre nom ?"
    };
  }
};
</script>

<style scoped >
.big-header {
  background-image: url("../assets/image/dgfbfdbbv.png");
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
.characterbox {
  display: flex;
  width: 600px;
  justify-content: space-between;
}
</style>
