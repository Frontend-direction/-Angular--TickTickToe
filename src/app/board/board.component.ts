import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickTickToeService } from '../tick-tick-toe.service';
import { Cell } from '../interfaces/cell.interface';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  private tickTickToesService = inject(TickTickToeService);

  board$ = this.tickTickToesService.board$;

  ngOnInit(): void {
    this.tickTickToesService.build();
  }

  trackCell(index: number) {
    return index;
  }
}
