import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './layout/components/components.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    ComponentsModule,
    
  ],
  exports: [
    LayoutModule
    

  ]
})
export class AdminModule { }
