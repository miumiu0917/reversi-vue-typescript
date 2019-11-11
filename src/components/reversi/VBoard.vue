<template>
  <div id="board">
    <VRow
      v-for="(row, i) in board.rows"
      :key="i"
      :y="i"
      :row="row"
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

  @Prop({required: true})
  public board!: Board;

  public onPutEvent(p: Point) {
    console.log(this.board.__repr__());
    this.board.put(p);
    console.log(this.board.__repr__());
  }
}
</script>

<style scoped>
#board {
  margin: 0 auto;
  width: 512px;
}
</style>
