import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { StarsComponent } from './Components/stars/stars.component';

import { ProductListComponent } from './Components/Orders/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { InputFieldDirective } from './Directives/input-field.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
   StarsComponent,
   ProductListComponent,
   LightBoxDirective,
   InputFieldDirective,
   USDtoEGPPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
