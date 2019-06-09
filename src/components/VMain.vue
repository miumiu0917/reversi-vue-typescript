<template>
  <v-app>
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-title>Reversi</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VStart extends Vue {
}
</script>
