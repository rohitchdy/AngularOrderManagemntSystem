import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderDetailCollections:any;
  errors:any;
  constructor(public httpObj:HttpClient) { }

  ngOnInit(): void {
    this.GetAllOrderDetails();
  }

  GetAllOrderDetails():any{
    this.httpObj.get('https://localhost:44384/api/OrderDetailApi').subscribe(
      (response: any) => {
        this.orderDetailCollections = response;
        console.log(this.orderDetailCollections);
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );

}
}
