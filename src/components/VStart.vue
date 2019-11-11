<template>
  <v-container>
    <v-layout
      justify-center
    >
      <v-flex
        md4
      >
        <v-btn
          block
          outline
          flat
          color="primary"
          @click="$router.push('/game')"
        >
          Start
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VStart extends Vue {
}
</script>
