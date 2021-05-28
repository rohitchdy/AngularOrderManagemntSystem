import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryCollections:any;
  errors:any;

  constructor(public router: Router, public httpObj: HttpClient) {}
  
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

   
  }

}
