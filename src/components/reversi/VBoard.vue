<template>
  <div>
    <VRow
      v-for="(row, i) in board.rows"
      :key="i"
      :y="i"
      :row="row"
      :state="state"
      @put="onPutEvent"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VRow from '@/components/reversi/VRow.vue';
import { Board, CellState, Point } from '../../models/reversi';

@Component({
  components: {
    VRow,
  },
})
export default class VBoard extends Vue {

  public board: Board = new Board();
  private state: CellState = CellState.Black;

  public onPutEvent(p: Point) {
    this.board.put(p);
  }
}
</script>
