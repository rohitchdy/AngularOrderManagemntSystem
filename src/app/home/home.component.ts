import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categoryCount:any;
  productCount:any;
  employeeCount:any;
  orderCount:any;
  supplierCount:any;
  shipperCount:any;
  customerCount:any;
  categoryCollections:any;
  errors:any;

  constructor(public routerObj: Router, public httpObj: HttpClient) {}

  ngOnInit(): void {
    this.httpObj.get('https://localhost:44384/api/CategoryApi/Get').subscribe(
      (response: any) => {
        this.categoryCount = response;
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );

    this.httpObj.get('https://localhost:44384/api/ProductApi/Get').subscribe(
      (response: any) => {
        this.productCount = response;
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );

    this.httpObj.get('https://localhost:44384/api/EmployeeApi/Get').subscribe(
      (response: any) => {
        this.employeeCount = response;
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );

    this.httpObj.get('https://localhost:44384/api/OrderApi/Get').subscribe(
      (response: any) => {
        this.orderCount = response;
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );

    this.httpObj.get('https://localhost:44384/api/SupplierApi/Get').subscribe(
      (response: any) => {
        this.supplierCount = response;
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );

    this.httpObj.get('https://localhost:44384/api/ShipperApi/Get').subscribe(
      (response: any) => {
        this.shipperCount = response;
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );

    this.httpObj.get('https://localhost:44384/api/CustomerApi/Get').subscribe(
      (response: any) => {
        this.customerCount = response;
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );

    // this.httpObj.get('https://localhost:44384/api/CategoryApi/GetAllCategory').subscribe(
    //   (response: any) => {
    //     this.categoryCollections = response;
    //     console.log(this.categoryCollections);
    //   },
    //   (error) => {
    //     this.errors = error;

    //     console.log(error.error);
    //   }
    // );

    

  }

}
