import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeCollections:any
  errors:any;

  constructor(public httpObj:HttpClient) { }

  ngOnInit(): void {
    
      this.httpObj.get('https://localhost:44384/api/EmployeeApi/GetAllEmployee').subscribe(
        (response: any) => {
          this.employeeCollections = response;
          console.log(this.employeeCollections);
        },
        (error) => {
          this.errors = error;
          console.log(error.error);
        }
      );
    
  }

}
