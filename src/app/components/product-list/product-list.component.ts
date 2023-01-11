import { Component, OnInit } from '@angular/core';
import { products } from 'src/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'ecommerce-app';
  products = products
  onNotify(p:any) {
   console.log(p)
  }

}
