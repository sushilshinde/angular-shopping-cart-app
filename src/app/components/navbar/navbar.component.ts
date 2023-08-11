import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SignOut } from 'src/app/shared/authentication/authStore/auth.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isAuthenticated: boolean = false;

  handleLogout() {
    this.store.dispatch(new SignOut());
    this.router.navigate(['/home']);
    this.isAuthenticated = false;
    window.location.reload()
  }

  constructor(private store: Store, private router: Router) {
    this.store.select((state: any) => state.auth).subscribe(
      data => {
        if (Object.values(data.userData).length > 0) {
          this.isAuthenticated = true
        }
        else {
          this.isAuthenticated = false
        }
      }
    )
  }
}
