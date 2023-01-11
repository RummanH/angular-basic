import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/products';

@Component({
  selector: 'app-product-dettails',
  templateUrl: './product-dettails.component.html',
  styleUrls: ['./product-dettails.component.css']
})
export class ProductDettailsComponent implements OnInit {
  product : any = {}

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  this.product = products.find(product => product.id === productIdFromRoute);
}

  
}
