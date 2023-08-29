import { ComponentFixture, TestBed,fakeAsync,tick } from '@angular/core/testing';
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
      imports: [RouterTestingModule, MatIconModule,MatListModule]
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


});
