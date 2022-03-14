<template>
  <v-app>
    <v-main class="appBackground">
      <v-container fluid class="d-flex justify-center">
        <v-flex xs12 md10>
          <job-filters></job-filters>
          <v-progress-linear
            class="d-block"
            color="appPrimary"
            v-if="loading"
            indeterminate
          ></v-progress-linear>
          <v-alert
            type="appPrimary" class="mt-4"
            v-if="!loading && jobListingMapped.length === 0"
          >
            <v-icon left>mdi-information</v-icon> No data found
          </v-alert>
          <job
            v-for="(job, index) in jobListingMapped"
            :key="index"
            :companyDisplayName="job.companyDisplayName"
            :positionFunction="job.positionFunction"
            :dueDate="job.dueDate"
            :positionTitle="job.positionTitle"
          ></job>
        </v-flex>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { JobListing, JobItem, IPage } from "@/models/models";
import Job from "@/components/Job.vue";
import JobFilters from "@/components/JobFilters.vue";
import PositionNode from "@/components/PositionNode.vue";
import { namespace } from "vuex-class";
const jobsModule = namespace("jobs");

@Component({ components: { Job, PositionNode, JobFilters } })
export default class JobFeed extends Vue {
  @jobsModule.State("list") jobListings!: IPage<JobListing>;
  @jobsModule.State("loading") loading!: boolean;

  get jobListing(): Array<JobListing> {
    return this.jobListings?.results || [];
  }

  get jobListingMapped(): Array<JobItem> {
    return this.jobListing.map((item) => {
      return <JobItem>{
        positionFunction: item.job?.position_function?.name_en,
        positionTitle: item.job?.title,
        companyDisplayName: item.job?.unit?.display_name,
        dueDate: item.job?.due_date,
      };
    });
  }
}
</script>

<style scoped></style>
