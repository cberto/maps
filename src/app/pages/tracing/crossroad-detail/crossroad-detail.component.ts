import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'ngx-crossroad-detail',
  templateUrl: './crossroad-detail.component.html',
  styleUrls: ['./crossroad-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossroadDetailComponent {


  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [110, 70],
    [170, 100, 180],

  ];

  public doughnutChartColors: Color[] = [
  { backgroundColor: [ '#31A7F8' , '#D6DBDF' ]},
  { backgroundColor: [ '#F3A04C' , '#D3F55D ' , '#D6DBDF' ]},



  ];
  public doughnutChartOptions: any = {
  responsive: true,
  title: {

    display: true,
    text: '',
    textAlign: 'end',

    dockInsidePlotArea: true,

  },
  pan: {
    enabled: true,
    mode: 'xy',
  },
  zoom: {
    enabled: true,
    mode: 'xy',
  },
  };

  public doughnutChartType: ChartType = 'doughnut';


  constructor() { }

  }
