import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

import { FuncTabService } from './func-tab.service';
import { CalcSeriesService } from './calc-series.service';
import { LogConsoleService } from './log-console.service';
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, LineController, PointElement, LineElement, registerables } from 'chart.js';

Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, LineController, PointElement, LineElement);


@Component({
  selector: 'app-lab7',
  templateUrl: './lab7.page.html',
  styleUrls: ['./lab7.page.scss'],
})
export class Lab7Page implements OnInit, OnDestroy {
  @ViewChild('chartCanvas') private chartCanvas?: ElementRef;
  chart: any;

  tableData: { x: number; y: number }[] = [];

  constructor(
    private funcTab: FuncTabService,
    private calcSeries: CalcSeriesService,
    private logger: LogConsoleService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  calculate() {
    const startX = -3 * Math.PI;
    const endX = 3 * Math.PI;
    const step = 0.1;

    this.tableData = this.funcTab.tabulate(
      (x: number) => this.calcSeries.calculate(x),
      startX,
      endX,
      step
    );

    this.logger.write(JSON.stringify(this.tableData));

    if (this.chart) {
      this.chart.destroy();
    }

    const labels = this.tableData.map((row) => row.x.toFixed(2));
    const data = this.tableData.map((row) => row.y);

    this.chart = new Chart(this.chartCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'f(x)',
            data: data,
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
  }
}