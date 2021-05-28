import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  categoryCollections:any;
  errors:any;
  productCollections:any;
  selectedValue:any;
  selectedCategory:any;
  categoryID:any;
  productID:any;
  unitPrice:any=0;
  discount:any=0;
  quantity:any;
  customerID:any;
  companyName:any;
  contactName:any;
  contactTitle:any;
  address:any;
  city:any;
  region:any;
  country:any;
  postalCode:any;
  phone:any;
  fax:any;
  requiredDate:any;
  orderID:any;
  employees:any;
  employeeID:any;
  shipperCollections:any;
  shipVia:any;
  // up:[];

  customerObj: Customer = new Customer();

  constructor(public routerObj: Router, public httpObj: HttpClient) {}

  ngOnInit(): void {
    
    this.httpObj.get('https://localhost:44384/api/CategoryApi/GetAllCategory').subscribe(
      (response: any) => {
        this.categoryCollections = response;
        console.log(this.categoryCollections);
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );
      this.GetLastOrderID();
      this.SelectEmployee();
      this.GetAllShipper();
      
    
  }
  selectChangeHandler(e:any) {
    this.categoryID=e.target.value
    
      this.httpObj.get(`https://localhost:44384/api/ProductApi/ProductByCategoryId/${this.categoryID}`).subscribe(
        (response: any) => {
          this.productCollections = response;
          console.log(this.productCollections);
        },
        (error) => {
          this.errors = error;
    
          console.log(error.error);
        }
      );
     }

     selectChangeHandler1(e:any):any{
      this.productID=e.target.value
        this.selectProductUnitPrice(this.productID)
     
      // alert(e.target.value)
      

     }

     selectProductUnitPrice(productID):any{
      this.httpObj.get(`https://localhost:44384/api/ProductApi/GetProductUnitPrice/${productID}`).subscribe(
        (response: any) => {
        let up=response;
        this.unitPrice=up[0];
          console.log(this.unitPrice);
        },
        (error) => {
          this.errors = error;
    
          console.log(error.error);
        }
      );
     }

     

     onSubmit(){
       this.AddCustomerDetails();
       this.AddOrder();
       this.AddOrderDetails();


     }

     AddCustomerDetails():any{
      var customerDTO = _.omit(this.customerObj, ['formCustomerGroup']);
      this.httpObj.post(`https://localhost:44384/api/CustomerApi`,customerDTO
      ).subscribe(
        (response: any) => {
        
          console.log(response);
        },
        (error) => {
          this.errors = error;
    
          console.log(error.error);
        }
      );
     }

     AddOrderDetails(){
      this.httpObj.post(`https://localhost:44384/api/OrderDetailApi`,{
        OrderId:this.orderID+1,
        ProductID:this.productID,
        UnitPrice:this.unitPrice,
        Quantity:this.quantity,
        Discount:0,
        
      }).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error) => {
          this.errors = error;
    
          alert(this.errors.error.text);
        }
      );
     }

     AddOrder():any{
      this.httpObj.post(`https://localhost:44384/api/OrderApi`,{
        CustomerID:this.customerObj.customerID,
        EmployeeID:this.employeeID,
        UnitPrice:this.unitPrice,
        OrderDate:new Date(),
        RequiredDate:this.requiredDate,
        ShipAddress:this.customerObj.address,
        ShipCity:this.customerObj.city,
        ShipRegion:this.customerObj.region,
        ShipPostalCode:this.customerObj.postalCode,
        ShipCountry:this.customerObj.country,
        ShipVia:this.shipVia
        
      }).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error) => {
          this.errors = error;
    
          console.log(error.error);
        }
      );
     }

     GetLastOrderID():any{
      this.httpObj.get(`https://localhost:44384/api/OrderApi/GetLastOrderID`).subscribe(
        (response: any) => {
        this.orderID=response;
        
          console.log(this.orderID);
        },
        (error) => {
          this.errors = error;
    
          console.log(error.error);
        }
      );
     }

     SelectEmployee():any{
      this.httpObj.get(`https://localhost:44384/api/EmployeeApi/GetAllEmployee`).subscribe(
        (response: any) => {
        this.employees=response;
          console.log(this.employees);
        },
        (error) => {
          this.errors = error;
    
          console.log(error.error);
        }
      );
     }

     selectChangeHandler2(e:any):any{
      this.employeeID=e.target.value
        this.selectProductUnitPrice(this.employeeID)
     
      // alert(e.target.value)
      

     }


     GetAllShipper():any{
      this.httpObj.get('https://localhost:44384/api/ShipperApi/GetAllShipper',).subscribe(
        (response: any) => {
          this.shipperCollections = response;
          console.log(this.shipperCollections);
        },
        (error) => {
          this.errors = error;
  
          console.log(error.error);
        }
      );
     
}

selectChangeHandler3(e:any):any{
  this.shipVia=e.target.value;
  console.log(this.shipVia);
}
}
