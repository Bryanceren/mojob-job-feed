<template>
  <div class="d-flex justify-space-between">
    <v-menu offset-y :close-on-content-click="false" max-height="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          class="font-weight-bold"
          color="appBackground"
          v-bind="attrs"
          v-on="on"
        >
          FILTER BY POSITION
          <v-icon right> mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item-group v-model="positionsSelected" multiple active-class="">
          <position-node
            :id="item.id"
            :title="item.name"
            :children="item.children"
            :toggleFunction="() => {}"
            v-for="(item, index) in positionFunctions"
            :key="index"
          ></position-node>
        </v-list-item-group>
      </v-list>
    </v-menu>
    <v-menu offset-y :close-on-content-click="false" max-height="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          class="font-weight-bold"
          color="appBackground"
          v-bind="attrs"
          v-on="on"
        >
          {{ perPage }}
          PER PAGE
          <v-icon right> mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item-group v-model="perPage" active-class="">
          <v-list-item
            v-for="(item, index) in perPageItems"
            :key="index"
            :value="item"
          >
            <span v-if="index === perPageItems.length - 1"> All </span>
            <span v-else>
              {{ item }}
            </span>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { JobListing, PositionFunction, IPage } from "@/models/models";
import Job from "@/components/Job.vue";
import PositionNode from "@/components/PositionNode.vue";
import { namespace } from "vuex-class";
const jobsModule = namespace("jobs");
const positionsModule = namespace("positions");

@Component({ components: { Job, PositionNode } })
export default class JobFilters extends Vue {
  @jobsModule.Mutation("setPerPage") setPerPage!: Function;
  @jobsModule.Mutation("setPositions") setPositions!: Function;
  @jobsModule.Action("getJobListing") getJobListing!: Function;
  @jobsModule.State("list") jobListings!: IPage<JobListing>;
  @positionsModule.State("list") positionFunctions!: Array<PositionFunction>;

  private positionsSelected: Array<number> = [];
  private perPage: number = 5;
  private search_timer?: number;

  get perPageItems(): Array<number> {
    return [5, 10, 25, this.jobListings?.count || 0];
  }

  async timeout(ms = 400) {
    if (this.search_timer) {
      clearTimeout(this.search_timer);
    }
    return new Promise((resolve) => {
      this.search_timer = setTimeout(resolve, ms);
    });
  }

  @Watch("perPage")
  async onPersonChanged2() {
    console.log(this.jobListings);

    this.setPerPage(this.perPage);
    await this.getJobListing();
  }
  @Watch("positionsSelected")
  async onPositionsChanged() {
    const positions = this.positionsSelected.join();
    this.setPositions(positions);
    await this.timeout();
    await this.getJobListing();
  }
}
</script>

<style scoped></style>
