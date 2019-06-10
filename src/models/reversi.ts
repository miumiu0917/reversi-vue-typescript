export class Board {

  public rows: Row[];
  public turn: CellState;

  constructor() {
    this.rows = [...Array(8).keys()].map((i) => new Row(i));
    this.turn = CellState.Black;
    this.rows[3].cells[3].state = CellState.Black;
    this.rows[4].cells[4].state = CellState.Black;
    this.rows[3].cells[4].state = CellState.White;
    this.rows[4].cells[3].state = CellState.White;
  }

  public put(i: number, j: number) {
    this.rows[i].cells[j].state = this.turn;
    if (this.turn === CellState.Black) {
      this.turn = CellState.White;
    } else {
      this.turn = CellState.Black;
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
