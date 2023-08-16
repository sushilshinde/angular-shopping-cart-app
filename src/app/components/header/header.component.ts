import { Component ,Self} from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ProductSearchService } from '../../core/services/product-search.service';
// import { NgControl } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Properties to hold cart products, search string, header visibility, cart visibility, and authentication status
  cartProducts: Array<any> = [];
  search: string = "";
  showheader: boolean = true;
  showCart = true;
  isAuthenticated: boolean = false;
  storeSubscription: Subscription;
  routerSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private store: Store,
    private searchService: ProductSearchService,
    // @Self() public ngControl: NgControl
  ) { }

  // Function to handle the search action
  onSearch() {
    this.searchService.updateSearch(this.search); // Update and emit the search value
    this.router.navigate(['/product-search'], { queryParams: { q: this.search } });
  }

  // Lifecycle hook called after the component is initialized
  ngOnInit() {
    // Subscribe to the store to update cart products and authentication status
    this.storeSubscription = this.store.select((state: any) => state).subscribe(
      data => {
        this.cartProducts = data.cart.cartItem;
        if (Object.values(data.auth.userData).length > 0) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
        }
      }
    );

    // Subscribe to router events to manage header and cart visibility based on route changes
    this.routerSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot.routeConfig?.['path'].includes('auth')) {
          this.showheader = false;
        } else {
          this.showheader = true;
        }
        if (event.snapshot.data?.['showCart'] !== undefined) {
          this.showCart = event.snapshot.data?.['showCart'];
        } else {
          this.showCart = true;
        }
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
    this.storeSubscription.unsubscribe();
  }

  // Function to handle user logout
  handleLogout() {
    this.authService.localLogout();
  }
}
