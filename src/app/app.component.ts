import { Component } from '@angular/core';
import { AuthenticationService } from './pages/authentication/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { LoadUser } from './pages/authentication/authStore/auth.action';
import { loadCart } from './pages/cart/cart-store/cart.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private modalService: NgbModal, private store: Store) {
  }
  ngOnInit() {
    this.store.dispatch(new LoadUser())
    this.store.select((state: any) => state.auth).subscribe(
      data => {
        if (Object.values(data.userData).length > 0) {
          this.store.dispatch(loadCart())
        }
      }
    )

  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
