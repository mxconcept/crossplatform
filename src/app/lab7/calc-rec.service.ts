import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcRecService {

  factorial(n: number): number {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }

  calculate(x: number, n: number): number {
    let result = 0;
    for(let i = 0; i <= n; i++) {
      result += Math.pow(-1, i) * Math.pow(x, 2 * i) / this.factorial(2 * i);
    }
    return result;
  }
}
