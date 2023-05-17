import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  @ViewChild('chart1Canvas') private chart1Canvas?: ElementRef;
  @ViewChild('chart2Canvas') private chart2Canvas?: ElementRef;
  @ViewChild('chart3Canvas') private chart3Canvas?: ElementRef;

  chart1: any;
  chart2: any;
  chart3: any;

  xn: number = -1.7;
  xk: number = 45.3;
  h: number = 0.3;
  a: number = 0.3;
  result1: string[] = [];
  result2: string[] = [];
  result3: string[] = [];

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {}

  calculate(xn: any, xk:any, h:any, a:any) {

    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.h = parseFloat(h); 
    this.a = parseFloat(a); 

    const labels1 = [];
    const data1 = [];
    const labels2 = [];
    const data2 = [];
    const labels3 = [];
    const data3 = [];

    for (let x = this.xn; x <= this.xk; x += this.h) {
      if (x <= 0) {
        var s = 'x=' + x.toFixed(2) + '; y=' + this.func1(x).toFixed(2) + ';';
        labels1.push(x.toFixed(2));
        data1.push(this.func1(x).toFixed(2));
        this.result1.push(s);
      }
      if (x <= this.a && x > 0) {
        var s = 'x=' + x.toFixed(2) + '; y=' + this.func2(x).toFixed(2) + ';';
        labels2.push(x.toFixed(2));
        data2.push(this.func2(x).toFixed(2));
        this.result2.push(s);
      }
      if (this.a < x) {
        var s = 'x=' + x.toFixed(2) + '; y=' + this.func3(x).toFixed(2) + ';';
        labels3.push(x.toFixed(2));
        data3.push(this.func3(x).toFixed(2));
        this.result3.push(s);
      }
    }

    if (this.chart1) {
      this.chart1.destroy();
    }
    this.chart1 = new Chart(this.chart1Canvas?.nativeElement, {
      type: 'line',
      data: {
        labels: labels1,
        datasets: [
          {
            label: 'f(x) - Function 1',
            data: data1,
            fill: false,
            borderColor: 'blue',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'x',
            },
          },
          y: {
            title: {
              display: true,
              text: 'f(x)',
            },
          },
        },
      },
    });

    if (this.chart2) {
      this.chart2.destroy();
    }
    this.chart2 = new Chart(this.chart2Canvas?.nativeElement, {
      type: 'line',
      data: {
        labels: labels2,
        datasets: [
          {
            label: 'f(x) - Function 2',
            data: data2,
            fill: false,
            borderColor: 'red',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
           
            title: {
              display: true,
              text: 'x',
            },
          },
          y: {
            title: {
              display: true,
              text: 'f(x)',
            },
          },
        },
      },
    });

    if (this.chart3) {
      this.chart3.destroy();
    }
    this.chart3 = new Chart(this.chart3Canvas?.nativeElement, {
      type: 'line',
      data: {
        labels: labels3,
        datasets: [
          {
            label: 'f(x) - Function 3',
            data: data3,
            fill: false,
            borderColor: 'green',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'x',
            },
          },
          y: {
            title: {
              display: true,
              text: 'f(x)',
            },
          },
        },
      },
    });
  }

  func1(x: number): number {
    return (
      Math.tan(x + 3 ** 2) /
      (Math.abs(x) ** 1.2 * Math.sin(3 * x))
    );
  }

  func2(x: number): number {
    return (
      (x ** 3 - 4 * x + 2) /
      (x ** 2 + Math.sin(7 * x) - 1)
    );
  }

  func3(x: number): number {
    return (
      (Math.tan(0.1 * x * x * Math.PI) + x) /
      Math.cos(2 * x + 3) ** 2
    );
  }
}
