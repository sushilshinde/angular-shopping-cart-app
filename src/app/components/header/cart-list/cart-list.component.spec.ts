// Importing necessary modules and classes for testing
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';

// Importing the component to be tested
import { CartListComponent } from './cart-list.component';

// Test suite for the CartListComponent
describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;
  let router: Router;

  // Asynchronous setup before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartListComponent], // Declaring the component to be tested
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatListModule,
        StoreModule.forRoot({}),
      ],
    }).compileComponents();
  });

  // Synchronous setup before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  // Test case: Ensure the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case: Ensure cart items are rendered correctly
  it('should render cart items', () => {
    // Arrange
    const cartData = [
      { product: { title: 'Product 1', price: 10 }, quantity: 2 },
      { product: { title: 'Product 2', price: 15 }, quantity: 1 },
    ];
    component.cartData = cartData;
    fixture.detectChanges();

    // Act
    const cartItems = fixture.nativeElement.querySelectorAll('mat-list');

    // Assert
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
