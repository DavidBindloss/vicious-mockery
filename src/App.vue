<template>
  <div class="container">
    <p :class="{ invisible: !notify }" class="has-text-primary">{{ message }}</p>
    <div id="app" class="space">
      <p
        @click.prevent="copyToClipboard('insult')"
      >{{ insult }}</p>

      <IconButton icon="redo" button-style="info" text="Again" @click="generateInsult(null)" />

      <IconButton
        icon="share-alt"
        button-style="primary"
        text="Share Link"
        @click="copyToClipboard('link')"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import IconButton from "./components/IconButton";

export default {
  name: "app",
  components: {
    IconButton
  },
  computed: {
    ...mapState(["data", "insult", "ids"])
  },
  methods: {
    ...mapActions(["generateInsult"]),
    copyToClipboard(type) {
      this.$clipboard(
        type === "link"
          ? `${window.location.href}?id=${this.ids.join("")}`
          : this.insult
      );
      this.message = `Copied ${type} to clipboard.`;
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
}
</style>
