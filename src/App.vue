<template>
  <div id="app">
    <p>{{ insult }}</p>
    <button @click.prevent="generate">Insult me again!</button>

  </div>
</template>

<script>
import data from "./assets/data.json";

let getPart = (section) => {
  let arr = data[`part_${section}`];
  return arr[Math.floor((Math.random()*arr.length))];
}

export default {
  name: 'app',
  created() {
    this.generate();
  },
  methods: {
    generate() {
      this.insult = `Thou ${getPart('one')} ${getPart('two')} ${getPart('three')}!`;
    }
  },
  data() {
    return {
      insult: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
