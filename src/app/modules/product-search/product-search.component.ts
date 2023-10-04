import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductSearchService } from '../../core/services/product-search.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  products: any[]; // Array to store fetched products
  search: string = ''; // Variable to store the search query

  constructor(
    private searchService: ProductSearchService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.products = []; // Initialize products array
  }

  ngOnInit(): void {
    // Subscribe to changes in query parameters (specifically 'q' parameter)
    this.route.queryParamMap.subscribe(params => {
      this.search = params.get('q') || ''; // Retrieve the 'q' parameter value, if available
      this.fetchAndFilterProducts(); // Call a method to fetch and filter products based on the search query
    });
  }

  // Method to fetch and filter products based on the search query
  fetchAndFilterProducts(): void {
    if (this.search && this.search.trim() !== '') { // Check if the search query is not empty
      // Call the getProductData method from the search service, passing the search query
      this.searchService.getProductData(this.search).subscribe(data => {
        this.products = data; // Update the products array with the fetched data
      });
    } else {
      this.products = []; // If the search query is empty, reset the products array
    }
  }
}
