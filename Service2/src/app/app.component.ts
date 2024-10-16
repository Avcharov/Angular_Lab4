import { Component } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';
import { AppComponentCustom } from './features/component/component.component';
import { CounterComponent } from './features/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponentCustom, CounterComponent],
  template: `
  <app-component></app-component>
  <counter-comp></counter-comp>


  `,
  providers: [LocalCounterService],
})
export class AppComponent {
  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
  ) {}
}
