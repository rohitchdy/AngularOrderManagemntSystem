import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  supplierCollections:any;
  errors:any;
  constructor(public httpObj: HttpClient) { }

  ngOnInit(): void {
    this.GetAllSupplier();
  }

  GetAllSupplier():any{
    this.httpObj.get(`https://localhost:44384/api/SupplierApi/GetAllSupplier`).subscribe(
      (response: any) => {
        this.supplierCollections = response;
        console.log(this.supplierCollections);
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );

}
}
