import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    projectName : new FormControl("hhhh"),
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



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
