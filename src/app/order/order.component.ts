import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderCollections:any;
  errors:any;

  constructor(public httpObj:HttpClient) { }

  ngOnInit(): void {
    this.httpObj.get(`https://localhost:44384/api/OrderApi/GetAllOrder`).subscribe(
      (response: any) => {
        this.orderCollections = response;
        console.log(this.orderCollections);
      },
      (error) => {
        this.errors = error;
        console.log(error.error);
      }
    );
  }

}

// Due to the null value present in the some field of  Orders table linq query doesnot work so
// I am not able to get data so this component is not working.
