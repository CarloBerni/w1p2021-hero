<template>
  <div class="big__header">
    <h1 style="margin-bottom: 700px;">{{message}}</h1>
    <br />

    <div>
    <router-link class="button" to="/characters">Votre esclave</router-link>
    <router-link class="button" to="/characters">Votre esclave</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Bonjour'
    };
  }
};
</script>
