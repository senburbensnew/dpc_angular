import { Component } from '@angular/core';
import { LineChartComponent } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-part3',
  standalone: true,
  imports: [LineChartComponent],
  templateUrl: './part3.component.html',
  styleUrl: './part3.component.scss'
})
export class Part3Component {
  chartData = [
    { date: new Date('2024-01-01'), value: 10 },
    { date: new Date('2024-01-02'), value: 25 },
    { date: new Date('2024-01-03'), value: 35 },
    { date: new Date('2024-01-04'), value: 50 }
  ];
}
