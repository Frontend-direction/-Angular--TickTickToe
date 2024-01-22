import { Injectable } from '@angular/core';
import { Cell } from './interfaces/cell.interface';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TickTickToeService {
  private DEFAUTLT_DIMENSION = 3;

  private _board$ = new BehaviorSubject<Cell[][]>([]);
  board$ = this._board$.asObservable().pipe(distinctUntilChanged());

  constructor() {}

  build() {
    const board = Array.from(Array(this.DEFAUTLT_DIMENSION)).map((_, index) => {
      return Array.from(Array(this.DEFAUTLT_DIMENSION), (_, i) => ({
        value: null,
        cellNo: i + index * 3,
      }));
    });

    this._board$.next(board);
  }
}
