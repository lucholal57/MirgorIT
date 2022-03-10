import { Component, OnInit } from '@angular/core';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  view: [number, number] = [500, 400];

  colorScheme = {
    name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FFFF06', '#FF0606', '#00FF00', '#06FFA4', '#E806FF'],
  };
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  data=[
    {
      "name": "IMEICHECK",
      "value": 12, 
    },
    {
      "name": "RF",
      "value": 18,
    },
    {
      "name": "BRESSNER",
      "value": 10,
      "extra": {
        "code": "it"
      }
    },
    {
      "name": "TOUCHPANEL",
      "value": 50
    },
    {
      "name": "ZEBRA ZT320",
      "value": 24
    },
    {
      "name": "ZEBRA X104",
      "value": 13
    },
    {
      "name": "HP 400 G8",
      "value": 45
    }
  ]

}
