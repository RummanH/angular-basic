import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor() { }
  @Input() products: any;
  @Output() notify = new EventEmitter();
  
  ngOnInit(): void {
  }


}
