<template>
  <div class="container">
    <p :class="{ invisible: !notify }" class="has-text-primary">{{ message }}</p>
    <div id="app" class="space" >
      <p @click.prevent="copyTextToClipboard" data-tooltip="Click to copy this insult" class="insult has-tooltip-right">{{ insult }}</p>
      <button class="button is-info is-rounded" @click.prevent=generateInsult(null)>
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'redo']" />
        </span>
        <span>Again</span>
      </button>
      <button class="button is-primary is-rounded" @click.prevent=copyLinkToClipboard>
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'share-alt']" />
        </span>
        <span>Share Link</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapState(["data", "insult", "ids"])
  },
  methods: {
    ...mapActions(["generateInsult"]),
    copyLinkToClipboard() {
      this.$clipboard(`${window.location.href}?id=${this.ids.join("")}`);
      this.message = "Copied link to clipboard!";
      this.showNotification();
    },
    copyTextToClipboard() {
      this.$clipboard(this.insult);
      this.message = "Copied insult to clipboard!";
      this.showNotification();
    },
    showNotification() {
      this.notify = true;
      window.setTimeout(() => {
        this.notify = false;
      }, 4000);
    }
  },

  data() {
    return {
      notify: false,
      message: ""
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
  min-height: 28px;
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
