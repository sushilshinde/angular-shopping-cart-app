// Importing necessary modules from Angular and RxJS
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '../../core/services/authentication.service';
import { SignIn, SignUp } from '../../shared/authentication/authStore/auth.action';

// Component decorator to define the structure and behavior of the Angular component
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  // Declaration of class properties
  subscribe: Subscription; // Subscription to manage the observable subscription
  isLogin: boolean = false; // Flag to determine if it's a login form
  isLoading: boolean = false; // Flag to indicate loading state
  error: string | null = null; // Variable to store error messages

  // Constructor to inject dependencies and initialize properties
  constructor(
    private store: Store, // Angular service for managing state with NGRX
    private activedRoute: ActivatedRoute // Angular service to access the route's information
  ) {
    // Subscribe to changes in the URL to determine the form type (login or signup)
    this.activedRoute.url.subscribe(urlSegments => {
      if (urlSegments.length > 0 && urlSegments[0].path === 'login') {
        this.isLogin = true;
      }
    });
  }

  // Lifecycle hook called after Angular has initialized all data-bound properties of a directive.
  ngOnInit() {
    // Subscribe to the auth state in the store to handle updates
    this.subscribe = this.store.select((state: any) => state.auth).subscribe(
      data => {
        // Log data for debugging purposes
        console.log(data);

        // Update component properties based on the store state
        this.error = data.error;
        this.isLoading = false;
      }
    );
  }

  // Function to handle form submission
  handleSubmit(formData: NgForm) {
    // Reset error and set loading state
    this.error = '';
    this.isLoading = true;

    // Check if the form is valid
    if (!formData.valid) {
      this.error = 'Please enter valid details.';
      return;
    }

    // Dispatch appropriate action based on form type (login or signup)
    if (this.isLogin) {
      this.store.dispatch(new SignIn(formData.value)); // Dispatch login action
    } else {
      this.store.dispatch(new SignUp(formData.value)); // Dispatch signup action
    }
  }

  // Lifecycle hook called just before Angular destroys the component
  ngOnDestroy() {
    // Unsubscribe from the observable to avoid memory leaks
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }
}
