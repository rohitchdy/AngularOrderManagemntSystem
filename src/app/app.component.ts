import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'OrderManagement';
  categoryCollections:any;
  errors:any;
  categoryID:any;
  productCollections:any;

  constructor(public router: Router, public httpObj: HttpClient) {}
  ngOnInit(): void {
    this.httpObj.get('https://localhost:44384/api/CategoryApi/GetAllCategory').subscribe(
      (response: any) => {
        this.categoryCollections = response;
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );

   
  }
  
  
  
}
