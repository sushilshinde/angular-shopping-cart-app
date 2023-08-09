import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthenticationService } from './authentication.service';
import { SignIn, SignUp } from './authStore/auth.action';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  isLogin: boolean = false;
  isLoading: boolean = false;
  error: string | null = null;

  clearError() {
    setTimeout(() => (this.error = ''), 3000);
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private store: Store,
    private activedRoute: ActivatedRoute
  ) {
    if (activedRoute.url['_value'][1].path === 'login') {
      this.isLogin = true
    }
  }

  ngOnInit() {
    this.store.select((state: any) => state.auth).subscribe(
      data => {
        setTimeout(() => {
          this.isLoading = false;
          this.error = data.error;
        }, 1000)
      }
    )
  }

  handleSubmit(formData: NgForm) {
    this.error = '';
    this.isLoading = true;
    if (!formData.valid) {
      this.error = 'Please enter valid details.';
      this.clearError();
      return;
    }
    if (this.isLogin) {
      this.store.dispatch(new SignIn(formData.value))
    }
    else {
      return this.store.dispatch(new SignUp(formData.value))
    }
  }
}
