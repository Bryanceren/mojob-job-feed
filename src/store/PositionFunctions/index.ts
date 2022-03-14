import { Module } from "vuex";
import { RootState } from "../types";
import { PositionsState } from "./types";
import { actions } from "./actions";
import { mutations } from "./mutations";

export const state: PositionsState = { list: []};

const namespaced: boolean = true;

export const positions: Module<PositionsState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};
