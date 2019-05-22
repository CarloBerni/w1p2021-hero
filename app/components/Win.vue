<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <ul>
      <li>
        <router-link class="button" to="/character">Recommencer</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Vous avez gagné ! La foule vous acclame! Suite à cette victoire vous allez gagner votre liberté. BRAVO!!! "
    };
  }
};
</script>

<style lang="scss" scoped>


.big-header {
  background-image: url("../assets/image/victoire.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: auto;
}
h1 {
  position: absolute;
  left: 25px;
  top: 70%;
  margin-right: 650px;
}
.button {
  position: absolute;
  right: 10%;
  bottom: 10%;
}
</style>
