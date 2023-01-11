import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDettailsComponent } from './components/product-dettails/product-dettails.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShippingComponent } from './components/shipping/shipping.component';

const routes: Routes = [{ path: "products", component: ProductListComponent },
   { path: 'products/:productId', component: ProductDettailsComponent },
   { path: 'cart', component: CartComponent },
   {path:"shipping", component: ShippingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
