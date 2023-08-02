import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export class CatService {
    constructor(private http: HttpClient) { }

    getCatData = (query) => this.http.get(`http://localhost:3000/products?category=${query}`)
}