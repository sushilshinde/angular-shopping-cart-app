import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { CheckoutComponent } from './checkout.component';
import { CheckoutDataService } from './checkout-data.service';
import { TitlebBarComponent } from 'src/app/components/title-bar/title-bar.component';
import { MatDividerModule } from '@angular/material/divider';
import { CustomCurrencyPipe } from 'src/app/components/custom-pipe/custom-currency.pipe';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let mockRouter: Partial<Router>;

  beforeEach(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    TestBed.configureTestingModule({
      declarations: [CheckoutComponent,TitlebBarComponent,CustomCurrencyPipe],
      imports: [
        RouterTestingModule,
        MatDividerModule,
        StoreModule.forRoot({}),
      ],
      providers: [
        CheckoutDataService,
        { provide: Router, useValue: mockRouter }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should set default form data', () => {
  //   expect(component.formData.firstName).toBe('Kanchugatla');
  //   expect(component.formData.lastName).toBe('Divya');
  //   expect(component.formData.country).toBe('india');
  // });

  // it('should place an order and set form data and cart list', () => {
  //   const checkoutDataService = TestBed.inject(CheckoutDataService);

  //   const mockCartList = [
  //     { title: 'Product 1', price: 100, quantity: 2 },
  //     { title: 'Product 2', price: 200, quantity: 3 },
  //   ];

  //   component.placeOrder(mockCartList);

  //   expect(mockRouter.navigate).toHaveBeenCalledWith(['/order']);
  //   expect(checkoutDataService.getFormData()).toEqual(component.formData);
  //   expect(checkoutDataService.cartList).toEqual(mockCartList);
  // });
});
