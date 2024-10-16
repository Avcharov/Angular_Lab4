import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { Phone } from './models/phone';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { LogService } from './services/log.service';
import { DataComponent } from './features/data/data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, DataComponent],
  template: `
    <data-comp></data-comp>
    <data-comp></data-comp>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [DataService, LogService],
})
export class AppComponent implements OnInit {
  name: string = '';
  price!: number;
  items: Phone[] = [];

  constructor(private dataService: DataService) {}

  addItem(name: string, price: number) {
    this.dataService.addData(name, price);
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
