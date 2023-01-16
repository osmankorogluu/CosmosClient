import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { RouterModule } from '@angular/router';
import { OrderComponent } from '../order/order.component';



@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component: BookComponent}
    ])
  ]
})
export class BookModule { }
