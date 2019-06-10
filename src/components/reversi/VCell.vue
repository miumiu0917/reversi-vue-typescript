<template>
  <div class="cell-wrapper" @click="onClick">
    <div class="cell"/>
    <div class="stone" :class="{ whitestone: isWhite, blackstone: isBlack }"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { CellState } from '../../models/reversi';

@Component
export default class VCell extends Vue {

  @Prop({ required: true })
  public y?: number;
  @Prop({ required: true })
  public x?: number;
  @Prop({ required: true })
  public state?: CellState;
  private turn?: CellState;

  @Emit()
  public put(i: number, j: number) {
    console.log([i, j]);
  }

  public get isWhite(): boolean {
    return this.state!.toString() === '1';
  }

  public get isBlack(): boolean {
    return this.state!.toString() === '2';
  }

  public onClick() {
    this.put(this.y!, this.x!);
    this.state = this.turn!;
  }
}
</script>

<style scoped>
.cell-wrapper {
  height: 64px;
}

.cell {
  width: 64px;
  height: 64px;
  background-color: darkgreen;
  border: medium solid #000000;
}

.stone {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  position: relative;
  top: -60px;
  left: 4px;
}

.whitestone {
  background-color: white;
}

.blackstone {
  background-color: black;
}
</style>

