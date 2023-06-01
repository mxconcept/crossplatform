import { Injectable, Optional } from '@angular/core';
import {LogConsoleService} from './log-console.service';

@Injectable({
  providedIn: 'root'
})
export class CalcSeriesService {

  constructor() { }

  private factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

  calculate(x: number): number {
    const n = 50; 
    let sum = 0;

    for (let i = 0; i <= n; i++) {
      sum += Math.pow(-1, i) * Math.pow(x, 2 * i) / this.factorial(2 * i);
    }

    return sum;
  }
}
