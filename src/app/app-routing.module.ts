import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ShipperComponent } from './shipper/shipper.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
  // {path:'' ,component:HomeComponent},
  {path:'home' ,component:HomeComponent},
  {path:'product' ,component:ProductComponent},
  {path:'product/:id' ,component:ProductComponent},
  {path:'' ,component:CustomerViewComponent},
  {path:'customer-view' ,component:CustomerViewComponent},
  {path:'customer' ,component:CustomerComponent},
  {path:'shipper' ,component:ShipperComponent},
  {path:'supplier' ,component:SupplierComponent},
  {path:'order' ,component:OrderComponent},
  {path:'order-detail' ,component:OrderDetailComponent},
  {path:'employee' ,component:EmployeeComponent},
  {path:'category' ,component:CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
