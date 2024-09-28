import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://fakestoreapi.com/products');
  }
  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>('https://fakestoreapi.com/products/categories');
  }
  getProductByCategory(keyword: string) {
    return this.http.get<any[]>('https://fakestoreapi.com/products/category/' + keyword);
  }

  getProductById(id:any): Observable<any[]>{
    return this.http.get<any[]>('https://fakestoreapi.com/products/' +id );
  } 
}
