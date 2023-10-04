// Import necessary modules and components for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let mockStore: MockStore;

  // Define initial state for the mock store
  const initialState = {
    auth: { userData: {} },
    cart: { cartItem: [] }
    // Add any other initial state properties as needed
  };

  beforeEach(async () => {
    // Configure testing module with necessary imports, declarations, and providers
    await TestBed.configureTestingModule({
      imports: [MatDividerModule, RouterTestingModule],
      declarations: [ProductCardComponent],
      providers: [
        // Provide a mock store with the defined initial state
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    // Inject the mock store
    mockStore = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    // Create a fixture for the component
    fixture = TestBed.createComponent(ProductCardComponent);
    // Get the component instance
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Ensure that the component is created successfully
    expect(component).toBeTruthy();
  });

  it('should set isAuthenticated to true if user data is present', () => {
    // Set user data in the mock store state
    const userData = { name: 'John' };
    mockStore.setState({ ...initialState, auth: { userData } });

    // Trigger change detection
    fixture.detectChanges();

    // Expect isAuthenticated to be true
    expect(component.isAuthenticated).toBe(true);
  });

  it('should set isAuthenticated to false if user data is not present', () => {
    // Set initial state without user data
    mockStore.setState(initialState);

    // Trigger change detection
    fixture.detectChanges();

    // Expect isAuthenticated to be false
    expect(component.isAuthenticated).toBe(false);
  });

  it('should set existInCart to false if item is not in cart', () => {
    // Set initial state with an empty cart
    const itemId = 1;
    mockStore.setState({ ...initialState, cart: { cartItem: [] } });

    // Set the itemId property in the component
    component.itemId = itemId;
    // Trigger change detection
    fixture.detectChanges();

    // Expect existInCart to be false
    expect(component.existInCart).toBe(false);
  });
});
