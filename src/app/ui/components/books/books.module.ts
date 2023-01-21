import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component: BooksComponent}
    ])
  ]
})
export class BooksModule { }
