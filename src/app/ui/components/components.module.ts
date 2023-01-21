import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketModule } from './basket/basket.module';
import { BooksModule } from './books/books.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from 'src/app/admin/layout/components/header/header.component';
import { SidebarComponent } from 'src/app/admin/layout/components/sidebar/sidebar.component';
import { FooterComponent } from 'src/app/admin/layout/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BooksModule,
    HomeModule,
    BasketModule,
    RouterModule
    
  ],
  exports:[
    
   
  ]
})
export class ComponentsModule { }
