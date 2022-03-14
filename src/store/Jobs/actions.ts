import { ActionTree } from "vuex";
import axios from "axios";
import { JobsState } from "./types";
import { RootState } from "../types";
import BaseApi from "@/api-requests/api";
import { IPage, JobListing } from "@/models/models";

const mojobApi: BaseApi = new BaseApi(
  "https://test-api.mojob.io/public/",
  axios
);
export const actions: ActionTree<JobsState, RootState> = {
  async getJobListing({ commit, state }): Promise<void> {
    commit("setLoader", true);
    try {
      const jobLocationFiltersResponsePage: IPage<JobListing> = await mojobApi.getJobListings(
        state.perPage,
        state.positions
      );
      if (jobLocationFiltersResponsePage) {
        commit("setJobListing", jobLocationFiltersResponsePage);
      } else {
        console.log("Failed loading position function filters");
      }
    } catch (e) {
      console.log("Failed loading position function filters");
      console.log(e);
    } finally {
      commit("setLoader", false);
    }
  },
};
