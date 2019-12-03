<template>
  <div class="container">
    <div id="app" class="space">
      <p class="insult">{{ insult }}</p>
      <button class="button is-info is-rounded" @click.prevent="generate">
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'redo']" />
        </span>
        <span>Again</span>
      </button>
      <button class="button is-primary is-rounded" @click.prevent="send">
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'share-alt']" />
        </span>
        <span>Share</span>
      </button>
      <p>{{ ids }}</p>
    </div>
    <div class="icons">
      <a href="https://github.com/DavidBindloss/vicious-mockery">
        <font-awesome-icon :icon="['fab', 'github']" size="3x" />
      </a>
      <a href>
        <font-awesome-icon :icon="['fas', 'share-alt']" size="3x" />
      </a>
       <social-sharing url="https://vuejs.org/"
                      title="The Progressive JavaScript Framework"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
                      <div>
                           <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
       <network network="reddit">
        <i class="fa fa-reddit"></i> Reddit
      </network>
      </div>
       </social-sharing>
    </div>
  </div>
</template>

<script>
import data from "./assets/data.json";

export default {
  name: "app",
  created() {
    this.generate();
  },
  methods: {
    getRIndex() {
      return Math.floor(Math.random() * 49);
    },

    getIdx(f, p = 0) {
      return parseInt(
        f
          .split("")
          .splice(p, 2)
          .join("")
      );
    },

    generate() {
      // Is there a querystring?
      let query = this.$route.query.id;
      // let one, two, three;
      let indices;
      if (query && query.length === 6) {
        indices = Array.from(Array(3)).map(
          (x, i) => this.getIdx(query, i * 2) + 50 * i
        );
      } else {
        indices = Array.from(Array(3)).map((x, i) => this.getRIndex() + 50 * i);
      }

      let [one, two, three] = indices.map(x => data[x]);
      this.insult = `Thou ${one} ${two} ${three}!`;
      this.ids = indices.map((x, i) => x - 50 * i);

      if (this.$route.query.id) this.$router.replace("/");
    }
  },
  data() {
    return {
      insult: "",
      ids: []
    };
  }
};
</script>

<style lang="scss">

body,
html {
  height: 100%;
}

body {
  margin: 0;
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
  flex-direction: column;
  height: 100%;

  .space {
    button:first-of-type {
      margin-right: 15px;
    }

    .insult {
      font-weight: bold;
      font-size: 1.6rem;
      margin-bottom: 15px;
    }
  }

  .icons {
    position: absolute;
    left: 20px;
    bottom: 20px;
    a {
      color: #5e5e5e;
      transition: color 0.3s ease;
      margin-right: 15px;
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
