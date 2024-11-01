import { FormControl } from '@angular/forms';

export class Project {
  clientProjectId: FormControl;
  projectName: FormControl;
  startDate: FormControl;
  expectedEndDate: FormControl;
  leadByEmpId: FormControl;
  completedDate: FormControl;
  contactPerson: FormControl;
  contactPersonContactNo: FormControl;
  totalEmpWorking: FormControl;
  projectCost: FormControl;
  projectDetails: FormControl;
  contactPersonEmailId: FormControl;
  clientId: FormControl;

  constructor() {
    this.clientProjectId = new FormControl(0);
    this.projectName = new FormControl("");
    this.startDate = new FormControl("");
    this.expectedEndDate = new FormControl("");
    this.leadByEmpId = new FormControl("");
    this.completedDate = new FormControl("");
    this.contactPerson = new FormControl("");
    this.contactPersonContactNo = new FormControl("");
    this.totalEmpWorking = new FormControl("");
    this.projectCost = new FormControl("");
    this.projectDetails = new FormControl("");
    this.contactPersonEmailId = new FormControl("");
    this.clientId = new FormControl("");
  }
}
