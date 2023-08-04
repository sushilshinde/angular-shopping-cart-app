import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthenticationService } from 'src/app/pages/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  routerEvents: any;
  cartProducts: Array<any> = [];
  search;
  showheader: boolean = true;
  showCart = true;
  total: number = 0;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private store: Store
  ) { }

  ngOnInit() {
    this.store.select((state: any) => state.cart.cartItem).subscribe(
      data => this.cartProducts = data
    )
    this.routerEvents = this.router.events.subscribe((event: any) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot.routeConfig?.['path'].includes('auth')) {
          this.showheader = false;
        } else {
          this.showheader = true;
        }
        if (event.snapshot.data?.['showCart'] !== undefined)
          this.showCart = event.snapshot.data?.['showCart'];
        else {
          this.showCart = true
        }
      }
    });
  }

  handleLogout() {
    this.authService.localLogout();
  }
}
