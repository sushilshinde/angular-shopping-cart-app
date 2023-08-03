import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/pages/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  routerEvents: any;
  sampleProducts: Array<any> = [
    {
      name: 'watch',
      quantity: 2,
      price: 250,
    },
    {
      name: 'Shoe',
      quantity: 1,
      price: 400,
    },
    {
      name: 'Shoe',
      quantity: 1,
      price: 400,
    },
  ];
  search;
  showheader: boolean = true;
  showCart = true;
  total: number = 0;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.routerEvents = this.router.events.subscribe((event: any) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot.routeConfig?.['path'].includes('auth')) {
          this.showheader = false;
        } else {
          this.showheader = true;
        }
        if (event.snapshot.data?.['showCart'] !== undefined)
          this.showCart = event.snapshot.data?.['showCart'];
      }
    });
  }

  handleLogout() {
    this.authService.localLogout();
  }
}
