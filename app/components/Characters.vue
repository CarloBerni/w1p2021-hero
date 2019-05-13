<template>
  <div class="big__header">
    <h1>Choix du personnage</h1>
    <br />
    <h1> {{message}} </h1>
    
    <router-link class="button" to="/page">Go to Page</router-link>
    <router-link class="button" to="/page2"></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'wesh'
    };
  }
};
</script>
