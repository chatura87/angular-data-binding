import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/shared/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService) { 
     this.productService.getProducts().subscribe(products => {
       this.productList = products;
     }

    )
  }



  ngOnInit() {
  }

}
