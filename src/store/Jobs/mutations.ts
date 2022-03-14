import { MutationTree } from "vuex";
import { JobsState } from "./types";
import { IPage, JobListing, PositionFunction } from "@/models/models";
export const mutations: MutationTree<JobsState> = {
  setJobListing(state, payload: IPage<JobListing>) {
    state.list = payload;
  },
  setPositions(state, payload: string) {
    state.positions = payload;
  },
  setPerPage(state, payload: number) {
    state.perPage = payload;
  },
  setLoader(state, payload: boolean) {
    state.loading = payload;
  },
};
