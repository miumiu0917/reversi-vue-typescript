<template>
  <v-container>
    <v-layout
      justify-center
    >
      <v-flex>
        <VBoard
          :board="board"
        />
      </v-flex>
    </v-layout>
    <p>白 {{ board.whites }}</p>
    <p>黒 {{ board.blacks }}</p>
    <p>{{ turn }}</p>
    <v-btn
      v-if="board.isOver()"
      @click="retry"
      flat
      outline
      color="primary"
    >
      もう一度遊ぶ
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VBoard from '@/components/reversi/VBoard.vue';
import { Board, CellState } from '../models/reversi';

@Component({
  components: {
    VBoard,
  },
})
export default class VGame extends Vue {

  public board: Board = new Board();

  public get turn(): string {
    if (this.board.isOver()) { return '終了です'; }
    if (this.board.turn === CellState.Black) { return '黒の番です'; }
    if (this.board.turn === CellState.White) { return '白の番です'; }
    return '';
  }

  public retry() {
    this.board = new Board();
  }
}
</script>
