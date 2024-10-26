import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../Services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  masterService = inject(MasterService)
  isLoader : boolean = true;
  designationList : IDesignation[] = [];

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result:APIResponseModel) => {
    this.designationList = result.data;
    this.isLoader = false;
    },error => {
      alert("API error/ Network Down")
      this.isLoader = false
    })
  }

}
