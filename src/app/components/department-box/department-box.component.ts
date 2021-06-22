import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { HighlighterService } from 'src/app/highlighter.service';

@Component({
  selector: 'app-department-box',
  templateUrl: './department-box.component.html',
  styleUrls: ['./department-box.component.scss']
})
export class DepartmentBoxComponent implements OnInit {

  @Input() depName!: string;
  @Input() depIcon!: string;
  @Input() depId!: number;



  @HostBinding('class.selected') public bolRec: boolean = false;

  constructor(private highlighter: HighlighterService) { }

  ngOnInit(): void {
    this.converter()
  }

  @HostListener('click') public selectDept() {
    this.highlighter.select(this.depId);
  }

  converter(){
    if(this.highlighter.selectedDeptId === this.depId){
      this.bolRec = true;
    } else {
      this.bolRec = false
    }
    console.log("highliter id>>>", this.highlighter.selectedDeptId, "DEP ID ", this.depId)
  }


}
