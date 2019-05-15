<template>
  <div class="big-header">
    <h1>Previous clicks {{ count }}</h1>
    <br />
    <router-link class="button" to="/">Go to Home</router-link>
  </div>
</template>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      count: countService.value()
    }
  }
};
</script>
