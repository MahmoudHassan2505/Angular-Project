import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { StarsComponent } from './Components/stars/stars.component';

import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { InputFieldDirective } from './Directives/input-field.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { ProductTableComponent } from './Components/product-table/product-table.component';
import { OrderComponent } from './Components/Orders/order.component';
import { OrderTableComponent } from './Components/order-table/order-table.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './Components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
   StarsComponent,
   OrderComponent,
   LightBoxDirective,
   InputFieldDirective,
   USDtoEGPPipe,
   ProductTableComponent,
   OrderTableComponent,
   NotFoundComponent,
   LoginComponent,
   MainLayoutComponent,
   ProductDetailsComponent,
   AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
