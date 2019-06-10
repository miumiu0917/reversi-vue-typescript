<template>
  <div>
    <VRow
      v-for="(row, i) in board.rows"
      :key="i"
      :y="i"
      :row="row"
      :state="state"
      :turn="board.turn"
      @put="onPutEvent"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VRow from '@/components/reversi/VRow.vue';
import { Board, CellState } from '../../models/reversi';

@Component({
  components: {
    VRow,
  },
})
export default class VBoard extends Vue {

  public board: Board = new Board();
  private state: CellState = CellState.Black;

  public onPutEvent(i: number, j: number) {
    this.board.put(i, j);
  }
}
</script>
