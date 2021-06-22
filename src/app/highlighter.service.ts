import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighlighterService {

  selectedDeptId: number = 0

  constructor() { }

  select(id: number){
    this.selectedDeptId = id
  }
}
