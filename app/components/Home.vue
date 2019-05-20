<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/character">Jouer</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  }
};
</script>


<style scoped>
.big-header {
  background-image: url("../assets/image/acceuil.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

</style>

