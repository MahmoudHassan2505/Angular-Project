import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './Components/Orders/order.component';
import { ProductTableComponent } from './Components/product-table/product-table.component';
import { OrderTableComponent } from './Components/order-table/order-table.component';
import { StarsComponent } from './Components/stars/stars.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { authGuard } from './Gaurds/auth.guard';
import { AddProductComponent } from './Components/add-product/add-product.component';

//contain root paths and it's component
const routes: Routes = [
  {
    path:'v1',
    component:MainLayoutComponent,
    children:[
      {
        path:'home',
        component:StarsComponent
      },
      {
        path:'products',
        component:OrderComponent
      },
      {
        path:'cart',
        component:OrderTableComponent,
        canActivate:[authGuard]
      },
      {
        path:'products/:pid',
        component:ProductDetailsComponent
      },
      {
        path:'add',
        component:AddProductComponent
      },
    ]
    },
  {
  path:'',
  redirectTo:'login',
  pathMatch:'full' //mathc full path
  },
  
  {
    path:'login',
    component:LoginComponent
  },
  {//wild card path
    path:'**', //mean any othe paths
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
