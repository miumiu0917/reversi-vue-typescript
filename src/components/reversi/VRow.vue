<template>
  <v-layout>
    <VCell v-for="i in 8" :key="i" :column="i" :row="row" :state="state" @put="onPutEvent"/>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import VCell from '@/components/reversi/VCell.vue';
import { Row, CellState } from '../../models/reversi';

@Component({
  components: {
    VCell,
  },
})
export default class VRow extends Vue {

  @Prop({ required: true })
  public row?: number;
  @Prop({ required: true })
  public state?: CellState;

  @Emit()
  public put(i: number, j: number) {
    console.debug([i, j]);
  }

  public onPutEvent(i: number, j: number) {
    this.put(i, j);
  }
}
</script>
