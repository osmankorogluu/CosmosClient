import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketModule } from './basket/basket.module';
import { BooksModule } from './books/books.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasketModule,
    BooksModule
    
  ]
})
export class ComponentsModule { }
