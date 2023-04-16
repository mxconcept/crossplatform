import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  a: number = 0;
  b: number = 0;
 // n: number = 0;
  result = '';

  ras2(a: any, b: any){
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);

      //this.n = 0;

      let count = 0;
      let numbers = [];

      if((isNaN(this.a)== true) || (isNaN(this.b)== true)){
        throw new Error('Parametr is not a number');
      }

      for (let i = a; i <= b; i++) {
        if (i % 29 == 0 && i % 2 == 0 && i % 5 == 2) {
          //this.n++;
          count++;
          numbers.push(i);
        }
      }
      this.result = `Кількість чисел, які кратні 29, парні і при діленні на 5 дають в остачі 2 на проміжку [${a}, ${b}]: ${count}. Ці числа: ${numbers.join(', ')}`;
    }
    
    catch(error){
      console.log(error);
    }
  }

}