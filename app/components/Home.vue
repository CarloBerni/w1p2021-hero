<template>
  <div class="home">
    <p>{{data[index].name}}</p>
    <div class="coucou">
      <p>{{data[index].text}}</p>
    </div>
    <br>
    <router-link class="button" to="/page">Go to Page</router-link>
    <br>
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
 
