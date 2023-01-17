import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home copy/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent,children:[
      {path:"",component:DashboardComponent},
      {path:"customer", loadChildren: () => import ( "./admin/components/customer/customer.module").then
      (module=> module.CustomerModule)},
      {path:"book", loadChildren: () => import ( "./admin/components/book/book.module").then
      (module=> module.BookModule)},
      {path:"order", loadChildren: () => import ( "./admin/components/order/order.module").then
      (module=> module.OrderModule)},
      {path:"category", loadChildren: () => import ( "./admin/components/category/category.module").then
      (module=> module.CategoryModule)},
    ]
  },
  
    { path:"",component: HomeComponent},
    {path:"basket",loadChildren:() => import("./ui/components/basket/basket.component").then(module => module.BasketComponent),},
    {path:"books",loadChildren:() => import("./ui/components/books/books.component").then(module => module.BooksComponent),}

  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
