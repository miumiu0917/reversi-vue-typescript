<template>
  <v-layout>
    <VCell
      v-for="(cell, i) in row.cells"
      :key="i"
      :x="i"
      :y="y"
      :state="row.cells[i].state"
      :turn="turn"
      @put="onPutEvent"
    />
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
  public row?: Row;
  @Prop({ required: true })
  public y?: number;
  @Prop({ required: true })
  public turn?: CellState;

  @Emit()
  public put(i: number, j: number) {
    console.debug([i, j]);
  }

  public onPutEvent(i: number, j: number) {
    this.put(i, j);
  }
}
</script>
