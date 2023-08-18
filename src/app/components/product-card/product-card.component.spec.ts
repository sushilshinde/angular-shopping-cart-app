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

  const initialState = {
    auth: { userData: {} },
    cart: { cartItem: [] }
    // Add any other initial state properties as needed
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDividerModule, RouterTestingModule],
      declarations: [ProductCardComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    mockStore = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isAuthenticated to true if user data is present', () => {
    const userData = { name: 'John' };
    mockStore.setState({ ...initialState, auth: { userData } });

    fixture.detectChanges();

    expect(component.isAuthenticated).toBe(true);
  });

  it('should set isAuthenticated to false if user data is not present', () => {
    mockStore.setState(initialState);

    fixture.detectChanges();

    expect(component.isAuthenticated).toBe(false);
  });


  it('should set existInCart to false if item is not in cart', () => {
    const itemId = 1;
    mockStore.setState({ ...initialState, cart: { cartItem: [] } });

    component.itemId = itemId;
    fixture.detectChanges();

    expect(component.existInCart).toBe(false);
  });

  
});
