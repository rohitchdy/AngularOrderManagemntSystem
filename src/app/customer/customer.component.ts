import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerCollections:any;
  errors:any;
  constructor(public routerObj: Router, public httpObj: HttpClient) {}

  ngOnInit(): void {
    this.GetAllCustomer();
  }

  GetAllCustomer():any{
    this.httpObj.get('https://localhost:44384/api/CustomerApi/GetAllCustomer').subscribe(
      (response: any) => {
        this.customerCollections = response;
        console.log(this.customerCollections);
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );
  }

}
