<template>
  <div>
    <app-header></app-header>
    <job-feed
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JobFeed from "@/components/JobFeed.vue";
import AppHeader from "@/components/AppHeader.vue";
import BaseApi from "@/api-requests/api";
import { IPage, JobListing, PositionFunction } from "@/models/models";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
const jobsModule = namespace("jobs");
const positionsModule = namespace("positions");

@Component({
  components: {
    JobFeed,
    AppHeader,
  },
})
export default class Home extends Vue {
  @jobsModule.Action("getJobListing") getJobListing!: Function;
  @jobsModule.State("list") jobListings: IPage<JobListing> | undefined;
  @positionsModule.Action("getPositionList") getPositionList!: Function;

  async mounted() {
    await this.getJobListing();
    await this.getPositionList();
    // Here is an example on how to retrieve job position function filters
  }
}
</script>
