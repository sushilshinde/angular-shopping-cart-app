import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadUser } from './shared/authentication/authStore/auth.action';
import { loadCart } from './modules/cart/cart-store/cart.action';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root', // The component's selector used in templates
  templateUrl: './app.component.html', // The HTML template for the component
  styleUrls: ['./app.component.css'], // Stylesheets for the component
})
export class AppComponent {
  subscription: Subscription
  constructor(private store: Store) {
  }

  // Lifecycle hook called after the component is initialized
  ngOnInit() {
    // Dispatch an action to load user data
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
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
