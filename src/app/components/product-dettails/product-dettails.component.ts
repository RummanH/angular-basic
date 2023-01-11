import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { products } from 'src/products';

@Component({
  selector: 'app-product-dettails',
  templateUrl: './product-dettails.component.html',
  styleUrls: ['./product-dettails.component.css']
})
export class ProductDettailsComponent implements OnInit {
  product : any = {}

  constructor(private route: ActivatedRoute,  private cartService: CartService) { }
  ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  this.product = products.find(product => product.id === productIdFromRoute);
}

addToCart(product:any) {
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
}

  
}
