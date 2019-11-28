<template>
  <div class="container">
    <div class="space spacer-top"></div>
    <div id="app" class="space">
      <p class="insult">{{ insult }}</p>
      <button class="button is-info" @click.prevent="generate">Insult me again!</button>
    </div>
    <div class="space spacer-bottom">
      
    </div>
    <div class="icons">
      <a href="https://github.com/DavidBindloss/vicious-mockery">
        <font-awesome-icon :icon="['fab', 'github']" size="3x" />
      </a>
    </div>
  </div>
  
</template>

<script>
import data from "./assets/data.json";

let getPart = section => {
  let arr = data[`part_${section}`];
  return arr[Math.floor(Math.random() * arr.length)];
};

export default {
  name: "app",
  created() {
    this.generate();
  },
  methods: {
    generate() {
      this.insult = `Thou ${getPart("one")} ${getPart("two")} ${getPart(
        "three"
      )}!`;
    }
  },
  data() {
    return {
      insult: ""
    };
  }
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;  
  margin: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  .space {
    max-width: 50%;
    .insult {
      font-weight: bold;
      font-size: 1.4rem;
      margin-bottom: 15px;
    }
  }

  .spacer-top {
    align-self: flex-start;
  }

  .spacer-bottom {
    align-self: flex-end;
  }

  .icons {
    position: absolute;
    left: 20px;
    bottom: 20px;
    a {
      color: #5e5e5e;
      transition: color 0.3s ease;
      &:hover {
        color: #363636;
      }
      i {
        font-size: 2rem;
      }
    }
  }
}
</style>
