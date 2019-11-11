<template>
  <v-container>
    <v-layout
      justify-center
    >
      <v-flex>
        <VBoard />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VBoard from '@/components/reversi/VBoard.vue';

@Component({
  components: {
    VBoard,
  },
})
export default class VGame extends Vue {
}
</script>
