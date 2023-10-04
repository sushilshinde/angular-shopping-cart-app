// Importing required modules from Angular core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  // Component metadata, specifying the selector, template file, and style file
  selector: 'app-trandy',
  templateUrl: './trandy.component.html',
  styleUrls: ['./trandy.component.css']
})
export class TrandyComponent implements OnInit {
  // Component properties
  title1: string = "Trandy Products";
  subscription: Subscription; // Subscription to manage the HTTP request
  products: any[]; // Array to store fetched products

  // Constructor for dependency injection
  constructor(private http: HttpClient, public router: Router) {
    this.products = []; // Initializing products array
  }

  // Lifecycle hook called after the component is initialized
  ngOnInit() {
    this.fetchProducts(); // Fetching products when the component is initialized
  }

  // Function to fetch trendy products from the API
  fetchProducts(): void {
    try {
      const apiUrl = `${environment.apiURL}/products?trendy=true`;
      // Subscribing to the HTTP GET request
      this.subscription = this.http.get<any[]>(apiUrl).subscribe(
        (data) => {
          this.products = data; // Updating the products array with the fetched data
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  }

  // Function to navigate to the product details page
  viewProductDetail(product: any) {
    // Navigating to the product details page with product data as query parameters
    this.router.navigate(['/product-details'], { queryParams: { product: JSON.stringify(product) } });
  }

  // Lifecycle hook called when the component is about to be destroyed
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Unsubscribing from the HTTP request to prevent memory leaks
    }
  }
}
