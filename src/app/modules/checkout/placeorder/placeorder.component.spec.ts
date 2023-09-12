import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceorderComponent } from './placeorder.component';
import { CheckoutDataService } from 'src/app/core/services/checkout-data.service';
import { MatCardModule } from '@angular/material/card';
import { CustomCurrencyPipe } from 'src/app/components/custom-pipe/custom-currency.pipe';
import { TotalPipe } from 'src/app/shared/custom-pipes/total.pipe';

describe('PlaceorderComponent', () => {
  let component: PlaceorderComponent;
  let fixture: ComponentFixture<PlaceorderComponent>;
  let mockCheckoutDataService: Partial<CheckoutDataService>;

  beforeEach(() => {
    mockCheckoutDataService = {
      getFormData: () => ({ firstName: 'John', lastName: 'Doe' }),
      cartList: [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 }
      ]
    };

    TestBed.configureTestingModule({
      declarations: [PlaceorderComponent,CustomCurrencyPipe,TotalPipe],
      imports: [MatCardModule],
      providers: [{ provide: CheckoutDataService, useValue: mockCheckoutDataService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user data and total price', () => {
    // Set up the test data and component state
    component.formData = { firstName: 'John', lastName: 'Doe' };
    component.cartList = [
      {title: 'iPhone 9', id: 1, price: 549, quantity: 1}];
  
    // Trigger change detection to update the view
    fixture.detectChanges();
  
    // Perform your expectations
    const element = fixture.nativeElement;
    const userNameElement = element.querySelectorAll('h3')[0];
    const priceElement = element.querySelectorAll('h3')[1];
    expect(userNameElement.textContent).toContain('John Doe');
    expect(priceElement.textContent).toContain('TotalPrice: $549'); // Adjust this line
  
    
  });
  

  // it('should display "No Items In The Cart..." message when cartList is empty', () => {
  //   component.cartList = [];
  //   fixture.detectChanges();
  
  //   const orderCard = fixture.nativeElement.querySelector('.bg-primary');
  //   const noItemsMessage = fixture.nativeElement.querySelector('h2');
  
  //   expect(orderCard).toBeFalsy();
  //   expect(noItemsMessage).toBeTruthy();
  
  //   const messageText = noItemsMessage.textContent.trim(); // Trim whitespace
  //   expect(messageText).toContain('No Items In The Cart...');
  // });
  
});
