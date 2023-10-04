// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';

// Component decorator with selector, template, and styles
@Component({
  selector: 'app-product-carousel', // Selector for the component
  templateUrl: './product-carousel.component.html', // Template file path
  styleUrls: ['./product-carousel.component.css'] // Styles file path
})
export class ProductCarouselComponent implements OnInit {
  // Owl Carousel configuration options
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, // Adjust the time (in milliseconds) between each slide
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      400: {
        items: 1
      },
      500: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  products: any[]; // Array to store fetched products

  // Constructor with HttpClient injection
  constructor(private http: HttpClient) {
    this.products = []; // Initialize products array
  }

  // Lifecycle hook - ngOnInit
  ngOnInit() {
    this.fetchProducts(); // Fetch products when the component initializes
  }

  // Method to fetch products from the API
  fetchProducts(): void {
    const apiUrl = 'https://fakestoreapi.com/products'; // API endpoint
    // Subscribe to the HTTP GET request
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.products = data; // Assign fetched products to the component's products array
      },
      (error) => {
        console.error('Error fetching products:', error); // Log an error if fetching fails
      }
    );
  }
}
