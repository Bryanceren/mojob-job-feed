<template>
  <v-card rounded="lg" class="my-5">
    <v-card-title class="font-weight-bold">{{ positionTitle }}</v-card-title>
    <v-card-text>
      {{ companyDisplayName }}
      <v-icon>mdi-circle-small</v-icon>
      {{ positionFunction }}
      <v-icon>mdi-circle-small</v-icon>
      {{ dueDate }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Job extends Vue {
  @Prop(String) readonly positionTitle: string | undefined;
  @Prop(String) readonly companyDisplayName: string | undefined;
  @Prop(String) readonly positionFunction: string | undefined;
  @Prop(String) readonly dueDate: string | undefined;
}
</script>

<style scoped></style>
