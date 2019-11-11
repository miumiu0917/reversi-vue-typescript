<template>
  <v-layout>
    <VCell
      v-for="(cell, i) in row.cells"
      :key="i"
      :x="i"
      :y="y"
      :cell="row.cells[i]"
      @put="onPutEvent"
    />
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import VCell from '@/components/reversi/VCell.vue';
import { Row, CellState, Point } from '../../models/reversi';

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

  @Emit()
  public put(p: Point) {
    console.debug(p);
  }

  public onPutEvent(p: Point) {
    this.put(p);
  }
}
</script>
