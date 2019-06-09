export class Board {

  public rows: Row[];
  public state: CellState;

  constructor() {
    this.rows = [...Array(8).keys()].map((i) => new Row(i));
    this.state = CellState.Black;
  }

  public put(i: number, j: number) {
    this.rows[i].cells[j].state = this.state;
    if (this.state === CellState.Black) {
      this.state = CellState.White;
    } else {
      this.state = CellState.Black;
    }
  }
}

export class Row {

  public cells: Cell[];
  private num: number;

  constructor(i: number) {
    this.num = i;
    this.cells = [...Array(8).keys()].map((n) => new Cell(n, CellState.None));
  }

  public state(j: number): CellState {
    return this.cells[j].describe();
  }
}

export class Cell {

  public state: CellState;
  private num: number;

  constructor(i: number, state: CellState) {
    this.num = i;
    this.state = state;
  }

  public describe(): CellState {
    return this.state;
  }
}

export enum CellState {
  None,
  White,
  Black,
}
