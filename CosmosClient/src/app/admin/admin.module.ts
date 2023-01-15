import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './layout/components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule
  ],
  exports: [
    LayoutModule
    

  ]
})
export class AdminModule { }
