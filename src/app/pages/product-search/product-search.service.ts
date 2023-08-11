import { Injectable,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

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
  private apiUrl = environment.apiURL;
  
  getProductData(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products?q=${query}`);
  }
}
