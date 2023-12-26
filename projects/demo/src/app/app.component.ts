import { Component } from '@angular/core';
import { NgxRepeatDirective } from 'projects/ngx-repeat/src/public-api';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [NgxRepeatDirective]
})
export class AppComponent {
  public title = 'ngx-repeat';
  public version = VERSION;
  public count = 3;
  public readonly code = `<ng-container *ngxRepeat="count; let index = index; let even = even; let odd = odd; let first = first; let last = last;">
    {{ index }} {{ even }} {{ odd }} {{ first }} {{ last }}
  </ng-container>`;

  public increment(): void {
    if (this.count < 100) {
      this.count++;
    }
  }

  public decrement(): void {
    if (this.count > 0) {
      this.count--;
    }
  }
}
