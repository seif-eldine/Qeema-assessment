import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar',
  templateUrl: './custom-progress-bar.component.html',
  styleUrls: ['./custom-progress-bar.component.scss']
})
export class CustomProgressBarComponent implements OnInit {

  @Input() actual!: number;
  @Input() planned!: number;
  color!: string;

  constructor() { }

  ngOnInit(): void {
   if(this.actual < 55) {
      this.color = 'red';
   } else if(this.actual < 75) {
      this.color= 'yellow';
   } else {
     this.color = 'green';
   }
  }
}
