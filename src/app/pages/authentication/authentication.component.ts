import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

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
    private router: Router
  ) {}

  handleSubmit(formData: NgForm) {
    this.isLoading = true;
    const mode = this.isLogin ? 'login' : 'register';
    if (!formData.valid) {
      this.error = 'Please enter valid details.';
      this.clearError();
      return;
    }
    this.authService
      .handleAuth(formData.value.email, formData.value.password, mode)
      .subscribe({
        next: (data: any) => {
          this.isLoading = false;
          this.router.navigate(['']);
        },
        error: (e: string) => {
          console.log(e);
          this.isLoading = false;
          this.error = e;
        },
      });
  }
}
