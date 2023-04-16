import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  myMatrix: number[][] = [];
  evenProduct: number = 1;

  constructor() {}

  matrix(n: any): void {
    let N = parseInt(n);
    this.myMatrix = [];
    this.evenProduct = 1;
    let evenFound = false;

    for (let i = 0; i < N; i++) {
      this.myMatrix[i] = [];
      for (let j = 0; j < N; j++) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        this.myMatrix[i][j] = randomNumber;

        if (randomNumber % 2 === 0) {
          evenFound = true;
          this.evenProduct *= randomNumber;
        }
      }
    }

  }

  getColor(num: any): string {
    return num % 2 === 0 ? 'lightblue' : '';
  }
}