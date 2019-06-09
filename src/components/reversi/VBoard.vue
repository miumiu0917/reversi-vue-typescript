<template>
  <div>
    <VRow v-for="i in 8" :key="i" :row="i" :state="state" @put="onPutEvent"/>
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

  public board!: Board;
  private state: CellState = CellState.Black;

  public created() {
    this.board = new Board();
  }

  public onPutEvent(i: number, j: number) {
    this.board.put(i, j);
    this.state = this.board.state;
  }
}
</script>
