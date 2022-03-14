// index.ts
import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { jobs } from "./Jobs/index";
import { positions } from "./PositionFunctions/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {},
  modules: {
    jobs,
    positions,
  },
};

export default new Vuex.Store<RootState>(store);
