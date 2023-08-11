import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from "../../modules/shop/store/shop.model"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private apiUrl = environment.apiURL;;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl+'/products');
  }

  getProductById(id) {
    return this.http.get<Product[]>(this.apiUrl + '/products/' + id);
  }
}
