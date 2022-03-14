import { ActionTree } from "vuex";
import axios from "axios";
import { PositionsState } from "./types";
import { RootState } from "../types";
import BaseApi from "@/api-requests/api";
import { IPage, JobListing, PositionFunction } from "@/models/models";

const mojobApi: BaseApi = new BaseApi(
  "https://test-api.mojob.io/public/",
  axios
);

export const actions: ActionTree<PositionsState, RootState> = {
  async getPositionList({ commit }): Promise<void> {
    try {
      const jobLocationFiltersResponsePage: IPage<PositionFunction> = await mojobApi.getPositionFunctions();
      if (jobLocationFiltersResponsePage.results) {
        commit('setPositionsList',jobLocationFiltersResponsePage.results)
      } else {
      }
    } catch (e) {}
  },
};
