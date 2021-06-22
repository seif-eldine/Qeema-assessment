import { Component, ViewChild, Input, OnInit } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  chartOptions: any;


  @Input() leftRect!: boolean;

  @Input() dtcSLM!: number;
  @Input() dtcActual!: number;
  @Input() dtcPlanned!: number;

  @Input() denSLM!: number;
  @Input() denActual!: number;
  @Input() denPlanned!: number;


  @Input() headOne!: string;
  @Input() headTwo!: string;
  @Input() headThree!: string;
  @Input() headFour!: string;
  @Input() headFive!: string;
  @Input() headSix!: string;

  @Input() headOnePercentage!: number;
  @Input() headTwoPercentage!: number;
  @Input() headThreePercentage!: number;
  @Input() headFourPercentage!: number;
  @Input() headFivePercentage!: number;
  @Input() headSixPercentage!: number;

  constructor() {
    this.chartOptions = {
      series: [48.9],
      chart: {
        type: "radialBar",
        offsetY: -20,
        offsetX: -65,
        height : 200,
        width: 150
      },
      plotOptions: {
        radialBar: {
          startAngle: -0,
          offsetX: 14,
          endAngle: 180,
          track: {
            background: "#e7e7e7",
            strokeWidth: "20%",
            margin: 12, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: true
            },
            value: {
              offsetY: -2,
              fontSize: "15px"
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },
      labels: ["Overall"]
    };
   }

  ngOnInit(): void {
  }

  colorDefiner(num: any){
    if(num > 65){
      return "primary"
    } else if (num > 49){
      return "accent"
    } else {
      return "warn"
    }
  }

}
