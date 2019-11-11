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
    if (this.board.turn === CellState.Black) {
      return '黒の番です';
    } else if (this.board.turn === CellState.White) {
      return '白の番です';
    } else {
      return '終了';
    }
  }
}
</script>
