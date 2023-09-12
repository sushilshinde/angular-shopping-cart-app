import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService  {

  constructor(private http:HttpClient) { }
  private apiUrl = environment.apiURL;
  
  getProductData(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products/search?q=${query}`);
  }
}
