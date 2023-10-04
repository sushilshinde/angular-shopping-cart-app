// Import necessary Angular testing modules and libraries
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CartComponent } from './cart.component';
import { removeItem, removeQuantity, addQuantity } from './cart-store/cart.action';
import { TitlebBarComponent } from 'src/app/components/title-bar/title-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent, TitlebBarComponent],
      imports: [RouterTestingModule, MatCardModule],
      providers: [
        provideMockStore(), // Provide a mock store for testing
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: {} }
          }
        }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
    spyOn(store, 'dispatch'); // Spy on the dispatch method of the mock store
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch removeItem action on handleRemove', () => {
    const itemId = 'someItemId';
    const removeItemAction = removeItem({ id: itemId });

    // Call the method under test
    component.handleRemove(itemId);

    // Expect that the dispatch method of the mock store was called with the correct action
    expect(store.dispatch).toHaveBeenCalledWith(removeItemAction);
  });

  it('should dispatch removeQuantity action on handleQantity with "remove" mode', () => {
    const itemId = 'someItemId';
    const removeQuantityAction = removeQuantity({ id: itemId });

    // Call the method under test
    component.handleQuantity('remove', itemId);

    // Expect that the dispatch method of the mock store was called with the correct action
    expect(store.dispatch).toHaveBeenCalledWith(removeQuantityAction);
  });

  it('should dispatch addQuantity action on handleQantity with "add" mode', () => {
    const itemId = 'someItemId';
    const addQuantityAction = addQuantity({ id: itemId });

    // Call the method under test
    component.handleQuantity('add', itemId);

    // Expect that the dispatch method of the mock store was called with the correct action
    expect(store.dispatch).toHaveBeenCalledWith(addQuantityAction);
  });
});
