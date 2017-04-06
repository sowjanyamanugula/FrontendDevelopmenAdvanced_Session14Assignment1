import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees=[];
  constructor(private _empservice:EmployeeService) { }

  ngOnInit() {
    this._empservice.getemployees()
        .subscribe(resemployeedata => this.employees=resemployeedata);
  }

}
