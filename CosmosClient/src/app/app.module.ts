import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { FooterComponent } from './admin/layout/components/footer/footer.component';
import { HeaderComponent } from './admin/layout/components/header/header.component';
import { SidebarComponent } from './admin/layout/components/sidebar/sidebar.component';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule, 
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
