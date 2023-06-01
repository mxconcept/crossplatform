import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncTabService {
  
  tabulate(func: (x: number) => number, startX: number, endX: number, step: number): {x: number, y: number}[] {
    let result: {x: number, y: number}[] = [];
    for(let x = startX; x <= endX; x += step) {
      result.push({x: x, y: func(x)});
    }
    return result;
  }
}
