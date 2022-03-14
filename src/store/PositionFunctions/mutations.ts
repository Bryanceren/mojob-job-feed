import { MutationTree } from "vuex";
import { PositionsState } from "./types";
import { JobListing } from "@/models/models";
export const mutations: MutationTree<PositionsState> = {
  setPositionsList(state, payload: Array<JobListing>) {
    state.list = payload;
  },
  
};
