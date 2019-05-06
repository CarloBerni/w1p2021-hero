<template>
  <div class="big__header">
    <h1>{{message}}</h1>
    <br />
    <router-link class="button" to="/">back to home</router-link>
  </div>
</template>

<script>
export default {
    data() {
    return {
      message: '3'
    };
  }
};
</script>
