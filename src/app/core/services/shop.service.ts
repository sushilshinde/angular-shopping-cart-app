// Importing required modules from Angular core and external dependencies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from "../../modules/shop/store/shop.model"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  // API URL for the shop service
  private apiUrl = environment.apiURL;

  // Constructor for dependency injection with the HttpClient
  constructor(private http: HttpClient) { }

  // Function to retrieve all products from the API
  getProducts(): Observable<Product[]> {
    // Using HttpClient to make a GET request to the products endpoint
    return this.http.get<Product[]>(this.apiUrl + '/products');
  }

  // Function to retrieve a product by its ID from the API
  getProductById(id) {
    // Using HttpClient to make a GET request to the product endpoint with a specific ID
    return this.http.get<Product[]>(this.apiUrl + '/products/' + id);
  }
}
