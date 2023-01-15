import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketModule } from './basket/basket.module';
import { BooksModule } from './books/books.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasketModule,
    BooksModule,
    HomeModule
  ]
})
export class ComponentsModule { }
