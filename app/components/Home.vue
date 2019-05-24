<template>
  <div class="big-header">
    <video class="videohome" autoplay loop muted>
      <source src="../assets/sound/homepage.mp4" type="video/mp4">
    </video>
    <audio autoplay loop>
      <source src="../assets/sound/songhome.mp3">
    </audio>
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
template{
  overflow: hidden;
}
.big-header {
  background-image: url('../assets/image/gladarena.png');
  background-position: center;
  background-repeat: no-repeat;
}
.videohome{
  height: 100vh;
  z-index: -10;
  background-position: center center;
}
.button {
  position: absolute;
  bottom: 20px;
  right: 44%;
}

</style>

