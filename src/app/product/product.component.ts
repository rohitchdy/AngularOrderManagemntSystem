import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productCollections:any;
  regionCollections:any;
  categoryID:any;
  errors:any;

  constructor(public routerObj: Router, public httpObj: HttpClient,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoryID=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.categoryID);

    if(this.categoryID!==null){
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
    else{
      this.httpObj.get(`https://localhost:44384/api/ProductApi/GetAllProduct`).subscribe(
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
    // this.httpObj.get('https://localhost:44384/api/RegionApi/Get').subscribe(
    //   (response: any) => {
    //     this.regionCollections = response;
    //     console.log(this.regionCollections);
    //   },
    //   (error) => {
    //     this.errors = error;

    //     console.log(error.error);
    //   }
    // );
  }
}
