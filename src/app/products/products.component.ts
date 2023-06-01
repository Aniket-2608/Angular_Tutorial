import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {id:1, name: 'Minimalists Analog Watch', price: '108', color: 'Black', available: 'Available', image: '/assets/shopping.jpg'},
    {id:2, name: 'Hisense Ultra HD Smart TV', price: '398', color: 'Black', available: 'Available', image: '/assets/shopping.jpg'},
    {id:3, name: 'APPLE iPhone 13', price: '599', color: 'Gold', available: 'Not Available', image: '/assets/shopping.jpg'},
    {id:4, name: 'LG Fully Automatic Wshing Machine', price: '299', color: 'White & Blue', available: 'Available', image: '/assets/shopping.jpg'},
    {id:5, name: 'LG Refridgerator with Double door Cooling', price: '199', color: 'Maroon', available: 'Not Available', image: '/assets/shopping.jpg'},
    {id:6, name: 'Dell Inspiron One 27 Ryzen 7', price: '499', color: 'Black', available: 'Available', image: '/assets/shopping.jpg'},
  ]
}
