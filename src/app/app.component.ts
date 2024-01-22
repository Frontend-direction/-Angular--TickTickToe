import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [BoardComponent],
})
export class AppComponent {
  title = 'tick-tick-toe';
}
