import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookModule } from './book/book.module';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrderModule } from './order/order.module';
import { HeaderComponent } from '../layout/components/header/header.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { FooterComponent } from '../layout/components/footer/footer.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BookModule,
    CategoryModule,
    CustomerModule,
    DashboardModule,
    OrderModule 

  ],
  exports: [
    
  ]
})
export class ComponentsModule { }
