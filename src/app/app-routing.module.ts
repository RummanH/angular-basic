import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDettailsComponent } from './components/product-dettails/product-dettails.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [{ path: "products", component: ProductListComponent },
   { path: 'products/:productId', component: ProductDettailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
