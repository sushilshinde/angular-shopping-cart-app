// Import necessary Angular modules, components, and external resources
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { priceFilterArray, sortby } from 'src/assets/mockData/filterMock';
import { filterData } from 'src/helper/filter';
import * as fromCatAction from './category-store/cat-page.action';
import { selectCat } from './category-store/cat-page.reducer';

// Decorator to define the component
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
})

// Class representing the Category Page component
export class CategoryPageComponent {
  constructor(private activeRoute: ActivatedRoute, private store: Store) {
    this.product = []; // Initialize product array
  }

  query: string = ''; // Holds the category query from the route
  isLoading: boolean = false; // Indicates whether data is loading
  priceArray = priceFilterArray; // Array for price filter options
  refArray; // Reference array to store the original product data
  product: Array<any>; // Array to store filtered product data
  priceRange = []; // Array to store the selected price range
  searchQuery: string = ''; // Holds the search query entered by the user
  sortby = "select"; // Holds the selected sorting option
  sortbyOptions = sortby; // Array of sorting options

  // Function to handle filter changes
  handleFilter() {
    this.setLoader(); // Set loader to indicate loading
    this.product = filterData(this.refArray, this.priceRange, this.searchQuery, this.sortby); // Apply filters
  }

  // Function to handle changes in the price filter array
  handlePriceArray(data) {
    const range = [];
    if (!data.length) {
      this.priceRange = [];
      this.handleFilter();
      return;
    }
    data.forEach(item => range.push(...(item.split(',')).map(item => +item)));
    this.priceRange = [Math.min(...range), Math.max(...range)];
    this.handleFilter();
  }

  // Function to set loader and simulate a delay
  setLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  // Function to clear the search query and reset the product array
  clearQuery() {
    this.setLoader();
    this.searchQuery = '';
    this.product = this.refArray;
  }

  // Lifecycle hook to execute initialization logic
  ngOnInit() {
    // Subscribe to route params to get the category query
    this.activeRoute.params.subscribe(params => this.query = params['cat']);
    // Dispatch an action to load category data based on the query
    this.store.dispatch(new fromCatAction.LoadCatData(this.query));
    // Subscribe to the store to get updated product data
    this.store.select(selectCat).subscribe((data) => {
      this.product = data['catProduct']; // Update the product array
      this.refArray = data['catProduct']; // Update the reference array
    });
  }
}
