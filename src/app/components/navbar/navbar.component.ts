import { Component, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SignOut } from 'src/app/shared/authentication/authStore/auth.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterContentInit {

  isAuthenticated: boolean = false;

  handleLogout() {
    this.store.dispatch(new SignOut());
    this.router.navigate(['/home']);
    this.isAuthenticated = false;
    window.location.reload();
  }

  constructor(public store: Store, public router: Router) {}

  ngAfterContentInit() {
    console.log('ngAfterContentInit has been called.');

    // Subscribe to authentication state changes
    this.store.select((state: any) => state.auth).subscribe(
      data => {
        if (Object.values(data.userData).length > 0) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
        }
      }
    );
  }
}
