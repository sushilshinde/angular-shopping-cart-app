// Import necessary modules from Angular and third-party libraries
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

// Import actions to dispatch for loading user and cart data
import { LoadUser } from './shared/authentication/authStore/auth.action';
import { loadCart } from './modules/cart/cart-store/cart.action';

// Import Subscription from RxJS for handling observables
import { Subscription } from 'rxjs';

// Define the component metadata using the @Component decorator
@Component({
  selector: 'app-root', // The component's selector used in templates
  templateUrl: './app.component.html', // The HTML template for the component
  styleUrls: ['./app.component.css'], // Stylesheets for the component
})
export class AppComponent {
  subscription: Subscription; // Declare a variable to hold the subscription

  // Inject the store service into the component
  constructor(private store: Store) {}

  // Lifecycle hook called after the component is initialized
  ngOnInit() {
    // Dispatch an action to load user data when the component is initialized
    this.store.dispatch(new LoadUser());

    // Subscribe to the 'auth' state in the store to react to changes
    this.subscription = this.store.select((state: any) => state.auth).subscribe(
      data => {
        // Check if user data exists in the 'auth' state
        if (Object.values(data.userData).length > 0) {
          // If user data exists, dispatch an action to load the cart
          this.store.dispatch(loadCart());
        }
      }
    );
  }

  // Lifecycle hook called before the component is destroyed
  ngOnDestroy() {
    // Unsubscribe from the 'auth' state when the component is destroyed to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
