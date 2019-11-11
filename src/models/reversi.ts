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

  public put(p: Point) {
    const reversed = this.search(p, this.turn);
    if (reversed.length === 0) {
      return;
    }
    this.putInner(p, this.turn);
    reversed.forEach((p0: Point) => {
      this.putInner(p0, this.turn);
    });
    if (this.turn === CellState.Black) {
      this.turn = CellState.White;
    } else {
      this.turn = CellState.Black;
    }
  }

  private putInner(p: Point, state: CellState) {
    const i = p.y;
    const j = p.x;
    this.rows[i].cells[j].state = state;
  }

  private ref(p: Point): CellState {
    const i = p.y;
    const j = p.x;
    return this.rows[i].cells[j].state;
  }

  private search(p: Point, self: CellState): Point[] {
    const f = (current: Point, nxt: (p0: Point) => (Point), result: Point[]): Point[] => {
      current = nxt(current);
      if (!current.isInBoard() || this.ref(current) === CellState.None) {
        return [];
      }
      if (this.ref(current) === self) {
        return result;
      } else {
        result.push(current);
        return f(current, nxt, result);
      }
    };
    let stones: Point[] = [];
    stones = stones.concat(f(p, (p0) => new Point(p0.x + 1, p0.y), []));
    stones = stones.concat(f(p, (p0) => new Point(p0.x - 1, p0.y), []));
    stones = stones.concat(f(p, (p0) => new Point(p0.x, p0.y + 1), []));
    stones = stones.concat(f(p, (p0) => new Point(p0.x, p0.y - 1), []));
    stones = stones.concat(f(p, (p0) => new Point(p0.x + 1, p0.y + 1), []));
    stones = stones.concat(f(p, (p0) => new Point(p0.x - 1, p0.y - 1), []));
    stones = stones.concat(f(p, (p0) => new Point(p0.x - 1, p0.y + 1), []));
    stones = stones.concat(f(p, (p0) => new Point(p0.x + 1, p0.y - 1), []));
    return stones;
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

export class Point {

  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public isInBoard(): boolean {
    if (this.x <= -1 || this.x >= 8) {
      return false;
    }
    if (this.y <= -1 || this.y >= 8) {
      return false;
    }
    return true;
  }
}

export enum CellState {
  None,
  White,
  Black,
}
