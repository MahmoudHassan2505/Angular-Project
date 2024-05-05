import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './Components/Orders/order.component';
import { ProductTableComponent } from './Components/product-table/product-table.component';
import { OrderTableComponent } from './Components/order-table/order-table.component';
import { StarsComponent } from './Components/stars/stars.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

//contain root paths and it's component
const routes: Routes = [
  {
  path:'',
  redirectTo:'/home',
  pathMatch:'full' //mathc full path
  },
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
    component:OrderTableComponent
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
