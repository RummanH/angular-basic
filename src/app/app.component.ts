import { Component, Input } from '@angular/core';
import { products } from 'src/products';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'ecommerce-app';
  products = products
  onNotify(p:any) {
   console.log(p)
  }
}
