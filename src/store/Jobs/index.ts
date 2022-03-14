import { Module } from "vuex";
import { RootState } from "../types";
import { JobsState } from "./types";
import { actions } from "./actions";
import { mutations } from "./mutations";

export const state: JobsState = {
  list: { count: 0, next: "string", prev: "", results: [] },
  positions: "",
  perPage: 5,
  loading:false
};

const namespaced: boolean = true;

export const jobs: Module<JobsState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};
