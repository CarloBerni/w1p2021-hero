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
      message: "Vous avez perdu! Sans aucun doute, vous n'étiez pas digne de votre Maître!"
    };
  }
};
</script>

<style lang="scss" scoped>


.big-header {
  background-image: url("../assets/image/mort.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

</style>
