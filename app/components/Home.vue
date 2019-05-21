<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <ul>
      <li>
        <router-link class="button" to="/character">Jouer</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  }
};
</script>


<style lang="scss" scoped>
.big-header {
  background-image: url("../assets/image/acceuil.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.button{
  position: absolute;
  bottom: 20px;
  right: 44%;
}
</style>

