import { Component, OnInit, Signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { distinctUntilChanged, interval, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-main-header',
  imports: [
    MatIconModule
  ],
  templateUrl: './main-header.html',
  styleUrl: './main-header.scss',
})
export class MainHeader implements OnInit {
  public currentDate: Signal<string | undefined>;

  constructor() {
    this.currentDate = toSignal(
      interval(1000).pipe(
        map(() => {
          const currentDateObj = new Date();
          const currentDateString = ` ${currentDateObj.toLocaleDateString(undefined, { dateStyle: 'full' })} ${currentDateObj.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' })} `;
          return currentDateString;
        }
        ), distinctUntilChanged()
      )
    );
  }

  ngOnInit(){

  }
}
