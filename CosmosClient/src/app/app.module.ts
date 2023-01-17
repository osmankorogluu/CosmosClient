import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { FooterComponent } from './admin/layout/components/footer/footer.component';
import { HeaderComponent } from './admin/layout/components/header/header.component';
import { SidebarComponent } from './admin/layout/components/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';

import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home copy/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
   // RouterModule.forRoot(routes),
    
    AdminModule, 
    UiModule, AppRoutingModule
  ],
  
  
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
