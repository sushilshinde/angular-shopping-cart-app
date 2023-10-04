// Importing required modules from Angular core and external dependencies
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService  {

  // Constructor for dependency injection with the HttpClient
  constructor(private http:HttpClient) { }

  // API URL for the product search service
  private apiUrl = environment.apiURL;

  // Function to retrieve product data based on a search query
  getProductData(query: string): Observable<any[]> {
    // Using HttpClient to make a GET request to the search endpoint with the specified query
    return this.http.get<any[]>(`${this.apiUrl}/products/search?q=${query}`);
  }
}
