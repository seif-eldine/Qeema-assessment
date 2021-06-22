export interface depInfo {
  id: number;
  depName: string;
  icon: string;
  dtc: {
    sinceLastMonth: number,
    actual: number,
    planned: number
  };
  den: {
    sinceLastMonth: number,
    actual: number,
    planned: number
  }
  sectionDetails: {
      governece: {name:string, percentage: number},
      digitialTransform: {name:string, percentage: number},
      operationTransform: {name:string, percentage: number},
      serviceExperience: {name:string, percentage: number},
      businessDelivery: {name:string, percentage: number},
      hcd: {name:string, percentage: number},
  };
}
