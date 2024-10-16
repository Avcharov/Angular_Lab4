import { Component } from '@angular/core';
import { LocalCounterService } from '../../services/local-counter.service';
import { AppCounterService } from '../../services/app-counter.service';

@Component({
    selector: 'counter-comp',
    standalone: true,
    template: `
        <h1>Компонент counter.component.ts</h1>
        <h2>Сервіс верхнього рівня App Counter {{appCounterService.counter}}</h2>
        <button class="btn" (click)="appCounterService.increase()">+</button>
        <button class="btn" (click)="appCounterService.decrease()">-</button>
        <h2>Сервіс рівня компоненту Local Counter {{localCounterService.counter}}</h2>
        <button class="btn" (click)="localCounterService.increase()">+</button>
        <button class="btn" (click)="localCounterService.decrease()">-</button>
        <hr/>
    `,
    providers: [LocalCounterService],
})
export class CounterComponent {
    constructor(public appCounterService: AppCounterService, public localCounterService: LocalCounterService) {}
}
