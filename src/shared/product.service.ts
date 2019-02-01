import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url = 'api/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  updateProduct(product: Product): Observable<Product> {
    this.url = `${this.url}/${product.id}`;
    return this.http.put<Product>(this.url, product);
  }

  deleteProduct(id: number): Observable<{}> {
    this.url = `${this.url}/${id}`;
    return this.http.delete<Product>(this.url);
  }
  getProduct(id: number): Observable<Product> {
    this.url = `${this.url}/${id}`;
    return this.http.get<Product>(this.url);
  }

}
