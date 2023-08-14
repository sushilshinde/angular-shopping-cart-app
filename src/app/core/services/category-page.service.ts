import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CatService {
    constructor(private http: HttpClient) { }
    private apiUrl = environment.apiURL

    getCatData = (query) => this.http.get(`${this.apiUrl}/products?category=${query}`)
}