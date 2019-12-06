import Vue from "vue";
import Vuex from "vuex";
import data from "@/assets/data.json";

Vue.use(Vuex);

const getRIndex = i => {
  return Math.floor(Math.random() * 49) + 50 * i;
};

const getIdx = (f, p = 0) => {
  return parseInt(
    f
      .split("")
      .splice(p, 2)
      .join("")
  );
};

export default new Vuex.Store({
  state: {
    data,
    insult: "",
    ids: []
  },
  mutations: {
    setInsult(state, insult) {
      Vue.set(state, "insult", insult);
    },
    setIds(state, ids) {
      Vue.set(state, "ids", ids);
    }
  },
  actions: {
    generateInsult({ commit, state }, payload = undefined) {
      let indices = Array.from(Array(3));

      if (typeof payload !== "undefined" && payload !== null) {
        indices = indices.map((_x, i) => getIdx(payload, i * 2) + 50 * i);
      } else {
        indices = indices.map((_x, i) => getRIndex(i));
      }


      commit("setInsult", `Thou ${indices.map(x => state.data[x]).join(" ")}!`);
      commit(
        "setIds",
        indices.map((x, i) => `00${x - 50 * i}`.slice(-2))
      );
    }
  }
});
