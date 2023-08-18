import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
import { CartListComponent } from './cart-list.component';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';

describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartListComponent],
      imports: [RouterTestingModule, MatIconModule,MatListModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render cart items', () => {
    const cartData = [
      { product: { title: 'Product 1', price: 10 }, quantity: 2 },
      { product: { title: 'Product 2', price: 15 }, quantity: 1 },
    ];
    component.cartData = cartData;
    fixture.detectChanges();

    const cartItems = fixture.nativeElement.querySelectorAll('mat-list');
    expect(cartItems.length).toEqual(cartData.length);

    cartItems.forEach((item, index) => {
      const cartItem = cartData[index];
      expect(item.textContent).toContain(cartItem.product.title.toUpperCase());
      expect(item.textContent).toContain(cartItem.product.price.toFixed(2));
      expect(item.textContent).toContain(`x ${cartItem.quantity}`);
      expect(item.textContent).toContain((cartItem.product.price * cartItem.quantity).toFixed(2));
    });
  });

  it('should navigate to cart page on "View Cart" link click', () => {
    const link = fixture.nativeElement.querySelector('a[routerLink="/cart"]');
    link.click();
    fixture.detectChanges(); // Manually trigger change detection
  
    const spy = spyOn(router, 'navigateByUrl');
    expect(spy).toHaveBeenCalledWith('/cart');
  });
  

  it('should navigate to checkout page on "Buy Now" button click', () => {
    const link = fixture.nativeElement.querySelector('button[routerLink="/checkout"]');
    link.click();
    fixture.detectChanges();
    const spy = spyOn(router, 'navigateByUrl');
    expect(spy).toHaveBeenCalledWith('/checkout');
  });

  // Add more test cases as needed
});
