<template>
  <div class="big__header">
    <h1>Choix du personnage</h1>
    <br />

    <Character></Character>
    <Character></Character>

    
    <router-link class="button" to="/page">Go to Page</router-link>
  </div>
</template>










<script>
export default {
  data() {
    return {
      message: '1'
    };
  }
};
</script>
