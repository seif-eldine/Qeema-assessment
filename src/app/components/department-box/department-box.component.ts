import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-box',
  templateUrl: './department-box.component.html',
  styleUrls: ['./department-box.component.scss']
})
export class DepartmentBoxComponent implements OnInit {

  @Input() depName!: string;
  @Input() depIcon!: string;
  @Input() depId!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
