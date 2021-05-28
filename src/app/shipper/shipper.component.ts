import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.css']
})
export class ShipperComponent implements OnInit {

  shipperCollections:any;
  errors:any;
  constructor(public httpObj: HttpClient, public router: Router) { }

  ngOnInit(): void {
    this.GetAllShipper();
  }

  GetAllShipper():any{
    this.httpObj.get('https://localhost:44384/api/ShipperApi/GetAllShipper').subscribe(
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
}
