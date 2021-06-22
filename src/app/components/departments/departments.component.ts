import { Component, OnInit } from '@angular/core';
import { depInfo } from 'src/app/models';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  name: string = "Naif Alotaibi";

  showSect: boolean = false;
  leftRect: string = "leftRect";
  rightRect: string = "rightRect";

  highlightedId: number = 0;

  filteredDep: depInfo[] = [];

  depInfo: depInfo[] = [
    {depName:"Delivery",id:1, icon: "fas fa-hand-holding", dtc:{
      sinceLastMonth: 10,
      actual: 55,
      planned: 80
    },
    den:{
      sinceLastMonth: 0,
      actual: 90,
      planned: 90
    },
    sectionDetails: {
      governece: {name:"Governece", percentage: 48},
      digitialTransform: {name:"Digital Transform", percentage: 33},
      operationTransform: {name:"Operation Transform", percentage: 67},
      serviceExperience: {name:"Service Experience", percentage: 44},
      businessDelivery: {name:"Business Delivery", percentage: 51},
      hcd: {name:"HCD", percentage: 80},
    }},
    {depName:"Service Assurance",id:2, icon: "fas fa-search", dtc:{
      sinceLastMonth: 10,
      actual: 55,
      planned: 80
    },
    den:{
      sinceLastMonth: 0,
      actual: 90,
      planned: 90
    },
    sectionDetails: {
      governece: {name:"Governece", percentage: 48},
      digitialTransform: {name:"Digital Transform", percentage: 33},
      operationTransform: {name:"Operation Transform", percentage: 67},
      serviceExperience: {name:"Service Experience", percentage: 44},
      businessDelivery: {name:"Business Delivery", percentage: 51},
      hcd: {name:"HCD", percentage: 80},
    }},
    {depName:"Performance", id:3, icon: "fas fa-thermometer-quarter", dtc:{
      sinceLastMonth: 10,
      actual: 55,
      planned: 80
    },
    den:{
      sinceLastMonth: 0,
      actual: 90,
      planned: 90
    },
    sectionDetails: {
      governece: {name:"Governece", percentage: 48},
      digitialTransform: {name:"Digital Transform", percentage: 33},
      operationTransform: {name:"Operation Transform", percentage: 67},
      serviceExperience: {name:"Service Experience", percentage: 44},
      businessDelivery: {name:"Business Delivery", percentage: 51},
      hcd: {name:"HCD", percentage: 80},
    }},
    {depName:"Financial", id:4, icon: "fab fa-cc-diners-club", dtc:{
      sinceLastMonth: 10,
      actual: 55,
      planned: 80
    },
    den:{
      sinceLastMonth: 0,
      actual: 90,
      planned: 90
    },
    sectionDetails: {
      governece: {name:"Governece", percentage: 48},
      digitialTransform: {name:"Digital Transform", percentage: 33},
      operationTransform: {name:"Operation Transform", percentage: 67},
      serviceExperience: {name:"Service Experience", percentage: 44},
      businessDelivery: {name:"Business Delivery", percentage: 51},
      hcd: {name:"HCD", percentage: 80},
    }},
    {depName:"Strategy Execution",id:5,  icon: "fas fa-sort-amount-up-alt", dtc:{
      sinceLastMonth: 10,
      actual: 55,
      planned: 80
    },
    den:{
      sinceLastMonth: 0,
      actual: 90,
      planned: 90
    },
    sectionDetails: {
      governece: {name:"Governece", percentage: 48},
      digitialTransform: {name:"Digital Transform", percentage: 33},
      operationTransform: {name:"Operation Transform", percentage: 67},
      serviceExperience: {name:"Service Experience", percentage: 44},
      businessDelivery: {name:"Business Delivery", percentage: 51},
      hcd: {name:"HCD", percentage: 80},
    }}
  ]


  constructor() { }

  ngOnInit(): void {
  }

  depClicked(deptName: string, id?: number){
    this.showSect = true;
    this.filteredDep = this.depInfo.filter(dep => dep.depName === deptName );
  }

}
