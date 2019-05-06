<template>
  <div class="big__header">
    <h1>{{ message }}</h1>
    <br />
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
