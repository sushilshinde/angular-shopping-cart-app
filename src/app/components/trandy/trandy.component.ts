import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trandy',
  templateUrl: './trandy.component.html',
  styleUrls: ['./trandy.component.css']
})
export class TrandyComponent implements OnInit {
  title1: string = "Trandy Products";
  subscription: Subscription

  products: any[];
  constructor(private http: HttpClient, public router: Router) {
    this.products = [];
  }

  ngOnInit() {
    this.fetchProducts();
  }



  fetchProducts(): void {
  try {
    const apiUrl = `${environment.apiURL}/products?trendy=true`;
    this.subscription = this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.products = data;
        console.log(this.products);
      },
     );
  } catch (error) {
    console.error('An error occurred:', error);
  }
}


  viewProductDetail(product: any) {
    this.router.navigate(['/product-details'], { queryParams: { product: JSON.stringify(product) } });
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
   
  }
}


