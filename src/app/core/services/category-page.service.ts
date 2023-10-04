// Importing necessary modules from Angular
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

// Injectable decorator to declare that this service should be provided at the root level
@Injectable({
    providedIn: 'root'
})
export class CatService {
    // Constructor to inject the HttpClient service
    constructor(private http: HttpClient) { }

    // Private property to store the base API URL from the environment
    private apiUrl = environment.apiURL;

    // Function to get cat data based on the provided query
    getCatData = (query) => this.http.get(`${this.apiUrl}/products?category=${query}`);
}
