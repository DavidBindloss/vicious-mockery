<template>
  <div class="container">
    <p :class="{ invisible: !notify }" class="has-text-primary">
      Link copied to clipboard!
    </p>
    <div id="app" class="space">
      <p class="insult">{{ insult }}</p>
      <button class="button is-info is-rounded" @click.prevent=generate>
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'redo']" />
        </span>
        <span>Again</span>
      </button>
      <button class="button is-primary is-rounded" @click.prevent=copyToClipboard>
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'share-alt']" />
        </span>
        <span>Share</span>
      </button>
      <!-- <p>{{ ids }}</p> -->
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
    copyToClipboard() {
      this.$clipboard(`${window.location.href}?id=${this.ids.join("")}`);
      this.notify = true;
      window.setTimeout(() => {
        this.notify = false;
      }, 4000)
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
      this.ids = indices.map((x, i) => `00${x - 50 * i}`.slice(-2));

      if (this.$route.query.id) this.$router.replace("/");
    }
  },
  data() {
    return {
      insult: "",
      ids: [],
      notify: false
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

.has-text-primary {
  transition: opacity 0.3s;
  opacity: 1;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 15px;
  &.invisible {
    opacity: 0;
  }
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
