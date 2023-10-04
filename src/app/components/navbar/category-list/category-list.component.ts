// Importing necessary modules and classes from Angular and Angular Material
import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { ActivationEnd, Router } from '@angular/router';

// Component decorator to define metadata for the component
@Component({
  selector: 'app-category-list', // Selector used to embed the component in HTML
  templateUrl: './category-list.component.html', // Path to the component's HTML template
  styleUrls: ['./category-list.component.css'], // Array of stylesheet files for the component
})

// CategoryListComponent class
export class CategoryListComponent {
  isCatOpen: boolean = true; // Property to track the state of the category list
  catList = [
    'Shirts',
    'Jeans',
    'Swimwear',
    'Sleepwear',
    'Sportswear',
    'Jumpsuits',
    'Blazers',
    'Jackets',
    'Shoes',
  ]; // Array of categories

  // Constructor to inject dependencies
  constructor(
    private router: Router,
  ) { }

  // Lifecycle hook called after the component is initialized
  ngOnInit() {
    // Subscribe to router events to manage the state of the category list based on route changes
    this.router.events.subscribe((event: any) => {
      if (event instanceof ActivationEnd) {
        // Check if the current route is 'home' and update the category list state accordingly
        if (event.snapshot.routeConfig?.['path'] === 'home') {
          this.isCatOpen = true;
        } else {
          this.isCatOpen = false;
        }
      }
    });
  }
}
