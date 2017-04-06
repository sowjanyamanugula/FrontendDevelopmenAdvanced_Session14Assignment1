import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  private _url:string="src/app/employee.json";
  constructor(private _http:Http) { }
  getemployees(){
    return this._http.get(this._url)
           .map((response:Response)=>response.json());
  }

}
