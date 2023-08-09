import { Injectable,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService  {

  searchProduct:string="";
  searchProductChange: EventEmitter<string> = new EventEmitter();
  updateSearch(search: string) {
    this.searchProduct = search;
    this.searchProductChange.emit(search);
  }
  
  constructor(private http:HttpClient) { }
  
  getProductData(query: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/products?q=${query}`);
  }
}
