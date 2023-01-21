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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,state,style,animate,transition}from '@angular/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';




@NgModule({
  declarations: [
   AppComponent
  ],
  imports: [
    BrowserModule,
     BrowserAnimationsModule,
     SimpleNotificationsModule.forRoot(),
   
    AppRoutingModule,
    AdminModule, UiModule
  ],
  
  
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
