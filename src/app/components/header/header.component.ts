import { Component,Output,EventEmitter } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthenticationService } from 'src/app/pages/authentication/authentication.service';
import { ProductSearchService } from '../../pages/product-search/product-search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartProducts: Array<any> = [];
  search:string="";
  showheader: boolean = true;
  showCart = true;
  isAuthenticated: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private store: Store,
    private searchService:ProductSearchService
  ) { }
  onSearch() {
    this.searchService.updateSearch(this.search); // Update and emit the search value
    this.router.navigate(['/product-search'], { queryParams: { q: this.search } });
  }
  

  ngOnInit() {
    this.store.select((state: any) => state).subscribe(
      data => {
        this.cartProducts = data.cart.cartItem
        if (Object.values(data.auth.userData).length > 0) {
          this.isAuthenticated = true
        }
        else {
          this.isAuthenticated = false
        }
      }

    )
    this.router.events.subscribe((event: any) => {
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
