// Import necessary modules and components for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { ProductDetailsComponent } from './product-details.component';
import { ShopService } from '../../core/services/shop.service';
import { Store } from '@ngrx/store';
import { TitlebBarComponent } from 'src/app/components/title-bar/title-bar.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { ColorsComponent } from './colors/colors.component';
import { SizeComponent } from './size/size.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Describe the test suite for ProductDetailsComponent
describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let mockShopService;
  let mockStore;

  // Mock data for a product
  const mockProductData = {
    _id: 1,
    title: 'Product Title',
    // ... other properties
  };

  // Set up before each test
  beforeEach(() => {
    // Create a spy object for the ShopService
    mockShopService = jasmine.createSpyObj(['getProductById']);
    mockShopService.getProductById.and.returnValue(of({ data: mockProductData }));

    // Create a mock object for the Store
    mockStore = {
      select: jasmine.createSpy('select').and.returnValue(of({ auth: { userData: {} }, cart: { cartItem: [] } })),
      dispatch: jasmine.createSpy('dispatch')
    };

    // Configure the testing module
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent, TitlebBarComponent, RatingComponent, ColorsComponent, SizeComponent],
      imports: [NgbCarouselModule, StoreModule.forRoot({}), MatIconModule, MatTabsModule, RouterTestingModule, NoopAnimationsModule],
      providers: [
        // Provide mock values for ActivatedRoute, ShopService, and Store
        { provide: ActivatedRoute, useValue: { params: of(convertToParamMap({ id: '1' })) } },
        { provide: ShopService, useValue: mockShopService },
        { provide: Store, useValue: mockStore }
      ],
    });

    // Create a component fixture
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  // Test case: Check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});


