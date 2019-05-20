<template>
  <div class="big-header">
    <h1>{{message}}</h1>
    <br>
    <div class="imageMec">
      <img src="../assets/image/mec.png">
    </div>
    <div class="characterbox">
      <li><router-link class="button" to="/game/1">Gladius</router-link></li>
      <li><router-link class="button" to="/game/2">Flavius</router-link></li>
    </div>
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

<style scoped >
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
.characterbox {
  display: flex;
  width: 600px;
  justify-content: space-between;
}
img {
  position: absolute;
  left: 50px;
  top: 30%;
  height: 600px;
}
</style>
