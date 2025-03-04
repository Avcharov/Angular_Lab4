import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Phone } from '../models/phone';
@Injectable()
export class DataService {
  private data: Phone[] = [
    { name: 'Apple iPhone 7', price: 36000 },
    { name: 'HP Elite x3', price: 38000 },
    { name: 'Alcatel Idol S4', price: 12000 },
  ];
  constructor(private logService: LogService) {}
  getData(): Phone[] {
    this.logService.write('операція отримання даних');
    return this.data;
  }
  addData(name: string, price: number) {
    this.data.push(new Phone(name, price));
    this.logService.write('операція додавання даних');
  }
}
