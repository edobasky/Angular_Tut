import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../Services/client.service';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';

@Component({
  selector: 'app-client-projects',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-projects.component.html',
  styleUrl: './client-projects.component.css'
})
export class ClientProjectsComponent implements OnInit {


  projectForm : FormGroup = new FormGroup({
    clientProjectId : new FormControl(0),
    projectName : new FormControl(""),
    startDate : new FormControl(""),
    expectedEndDate : new FormControl(""),
    leadByEmpId : new FormControl(""),
    completedDate : new FormControl(""),
    contactPerson : new FormControl(""),
    contactPersonContactNo : new FormControl(""),
    totalEmpWorking : new FormControl(""),
    projectCost : new FormControl(""),
    projectDetails : new FormControl(""),
    contactPersonEmailId : new FormControl(""),
    clientId : new FormControl(""),
  })



  clientService = inject(ClientService);
  employeeList : Employee[] = [];
  clientList : Client[] = [];

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.clientService.getAllEmployees().subscribe((res:APIResponseModel) => {
     this.employeeList = res.data
    });
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((res:APIResponseModel) => {
     this.clientList = res.data
    });
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    formValue.clientId = Number(this.projectForm.value.clientId);
    formValue.projectCost = Number(this.projectForm.value.projectCost);
    formValue.leadByEmpId = Number(this.projectForm.value.leadByEmpId);
    formValue.totalEmpWorking = Number(this.projectForm.value.totalEmpWorking);
    debugger;
    this.clientService.addClientProjectUpdate(formValue).subscribe({
      next : (res : APIResponseModel) => {
        if (res.result) {
          alert('Project created succesfully!');
        } else {
          alert(res.message)
        }
      },
      error : (error) => {
        console.log('Error occurred:', error);
        alert('An error occurred while creating the project. Please try again.')
      }
    })
  }
}
