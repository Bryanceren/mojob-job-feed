<template>
  <v-app-bar app color="#ffffff" prominent flat absolute>
    <v-img
      src="@/assets/mojob_logo_on_white.png"
      contain
      max-height="100%"
      max-width="200"
    />
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppHeader extends Vue {
  name: String = "AppHeader";
}
</script>
