// Importing necessary modules and classes from Angular
import { Component, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SignOut } from 'src/app/shared/authentication/authStore/auth.action';

// Component decorator to define metadata for the component
@Component({
  selector: 'app-navbar', // Selector used to embed the component in HTML
  templateUrl: './navbar.component.html', // Path to the component's HTML template
  styleUrls: ['./navbar.component.css'], // Array of stylesheet files for the component
})

// NavbarComponent class implementing AfterContentInit interface
export class NavbarComponent implements AfterContentInit {

  isAuthenticated: boolean = false; // Property to track the authentication status

  // Function to handle user logout
  handleLogout() {
    // Dispatch the SignOut action to trigger the logout process
    this.store.dispatch(new SignOut());
    // Navigate to the home page after logout
    this.router.navigate(['/home']);
    // Update the authentication status and force a page reload
    this.isAuthenticated = false;
    window.location.reload();
  }

  // Constructor to inject dependencies
  constructor(public store: Store, public router: Router) {}

  // Lifecycle hook called after the content has been initialized
  ngAfterContentInit() {
    console.log('ngAfterContentInit has been called.');

    // Subscribe to authentication state changes
    this.store.select((state: any) => state.auth).subscribe(
      data => {
        // Update the isAuthenticated property based on the authentication state
        if (Object.values(data.userData).length > 0) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
        }
      }
    );
  }
}
