// Importing necessary modules and classes from Angular
import { Component, DoCheck } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

// Component decorator to define metadata for the component
@Component({
  selector: 'app-header', // Selector used to embed the component in HTML
  templateUrl: './header.component.html', // Path to the component's HTML template
  styleUrls: ['./header.component.css'], // Array of stylesheet files for the component
})

// HeaderComponent class implementing DoCheck interface for custom change detection
export class HeaderComponent implements DoCheck {
  // Properties to hold cart products, search string, header visibility, cart visibility, and authentication status
  cartProducts: Array<any> = [];
  search: string = "";
  showheader: boolean = true;
  showCart = true;
  isAuthenticated: boolean = false;
  storeSubscription: Subscription;
  routerSubscription: Subscription;

  // Constructor to inject dependencies
  constructor(
    public router: Router,
    private authService: AuthenticationService,
    private store: Store<any>,
  ) {}

  // Function to handle the search action
  onSearch() {
    this.router.navigate(['/product-search'], { queryParams: { q: this.search } });
  }

  // Lifecycle hook called after the component is initialized
  ngOnInit() {
    // Subscribe to the store to update cart products and authentication status
    this.storeSubscription = this.store.select((state: any) => state).subscribe(
      data => {
        this.cartProducts = data.cart.cartItem;
        // if (Object.values(data.auth.userData).length > 0) {
        //   this.isAuthenticated = true;
        // } else {
        //   this.isAuthenticated = false;
        // }
      }
    );
    
    // Subscribe to router events to manage header and cart visibility based on route changes
    this.routerSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot.routeConfig?.['path'].includes('auth')) {
          this.showheader = false;
        } else {
          this.showheader = true;
        }
        if (event.snapshot.data?.['showCart'] !== undefined) {
          this.showCart = event.snapshot.data?.['showCart'];
        } else {
          this.showCart = true;
        }
      }
    });
  }

  // Lifecycle hook called during every change detection run
  ngDoCheck() {
    // Update the authentication status based on the latest data
    this.store.select((state: any) => state.auth.userData).subscribe(userData => {
      this.isAuthenticated = Object.values(userData).length > 0;
    });
  }

  // Lifecycle hook called before the component is destroyed
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
    this.storeSubscription.unsubscribe();
  }

  // Function to handle user logout
  handleLogout() {
    this.authService.localLogout();
  }
}
