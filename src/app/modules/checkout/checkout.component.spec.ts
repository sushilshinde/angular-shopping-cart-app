import { ComponentFixture, TestBed,tick,fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CheckoutComponent } from './checkout.component';
import { CheckoutDataService } from '../../core/services/checkout-data.service';
import { TitlebBarComponent } from 'src/app/components/title-bar/title-bar.component';
import { MatDividerModule } from '@angular/material/divider';
import { TotalPipe } from 'src/app/shared/custom-pipes/total.pipe';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let mockStore: MockStore;
  const initialState = {
    cart: {
      cartItem: [
        // Initialize your cart items here for testing
      ]
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutComponent,TitlebBarComponent,TotalPipe],
      imports: [RouterTestingModule,MatDividerModule,FormsModule],
      providers: [
        provideMockStore({ initialState }),
        // Provide a mock for CheckoutDataService
        {
          provide: CheckoutDataService,
          useValue: jasmine.createSpyObj('CheckoutDataService', ['setFormData']),
        },
        
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
    it('should set default form data', () => {
    expect(component.formData.firstName).toBe('Kanchugatla');
    expect(component.formData.lastName).toBe('Divya');
    expect(component.formData.country).toBe('india');
  });

 
  it('should set the form data and cart list on placeOrder()', () => {
    // ... rest of your test

    // Mock navigation
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    component.placeOrder(initialState.cart.cartItem);

    // ... assertions

    // Check navigation
    expect(navigateSpy).toHaveBeenCalledWith(['/order']);
  });
});
 

