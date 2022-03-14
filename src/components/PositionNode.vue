<template>
  <v-list-item class="d-block" @click="toggleFunction" :value="id">
    <template v-slot:default="{ active, toggle }" disabled>
      <v-list-item-action class="d-inline-flex">
        <v-checkbox :input-value="active"></v-checkbox>
      </v-list-item-action>
      <v-list-item-title class="d-inline-flex">{{ title }}</v-list-item-title>
      <v-list class="d-block" v-if="children.length > 0">
        <position-node
        :id="item.id"
          :title="item.name"
          :children="item.children"
          :toggleFunction="toggle"
          v-for="(item, index) in children"
          :key="index"
        >
        </position-node>
      </v-list>
    </template>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { JobListing, PositionFunction, JobItem } from "@/models/models";
import Job from "@/components/Job.vue";
@Component({ components: { Job, PositionNode } })
export default class PositionNode extends Vue {
  @Prop(String) private readonly title!: string;
  @Prop(Number) private readonly id!: number;
  @Prop(Array) private readonly children!: Array<PositionFunction>;
  @Prop(Function) private toggleFunction!: Function;
}
</script>
