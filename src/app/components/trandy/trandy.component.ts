import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-trandy',
  templateUrl: './trandy.component.html',
  styleUrls: ['./trandy.component.css']
})
export class TrandyComponent implements OnInit {
  title1: string = "Trandy Products"
  products: any[];
  constructor(private http: HttpClient, public router: Router) {
    this.products = [];
  }
  ngOnInit() {
    this.fetchProducts();
    console.log(environment.apiURL)
  }



  fetchProducts(): void {
    const apiUrl = `${environment.apiURL}/team-d/products?trendy=true`;
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  viewProductDetail(product: any) {
    this.router.navigate(['/product-details'], { queryParams: { product: JSON.stringify(product) } });
  }
}

