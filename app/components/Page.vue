<template>
  <div class="home">
    <div class="coucou">
      <p>{{data[index].text}}</p>
    </div>
    <br>
    <router-link class="button" to="/">Go to Home</router-link>
  </div>
</template>

<script>
import data from "../data.json";

export default {
  name: "home",

  data() {
    return {
      data: [],
      index: 0
    };
  },
  created() {
    this.data = data;
  }
};
</script>
