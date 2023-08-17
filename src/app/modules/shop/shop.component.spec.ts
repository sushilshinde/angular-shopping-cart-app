// necessary testing modules and dependencies
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ShopComponent } from './shop.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { TitlebBarComponent } from 'src/app/components/title-bar/title-bar.component';
import { ProductCarouselComponent } from '../product-details/product-carousel/product-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ShopService } from 'src/app/core/services/shop.service';
import { ShopState } from './store/shop.model';

// the test suite for ShopComponent
describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;
  let mockStore: MockStore;
  let store: Store<ShopState>;
  let mockShopService: jasmine.SpyObj<ShopService>;

  // Define initial state for the NgRx store
  const initialState: ShopState = {
    products: [],
    loading: false,
    error: null,
  };

  // Set up test environment and dependencies before each test
  beforeEach(waitForAsync(() => {
    // Create a mock instance of ShopService
    mockShopService = jasmine.createSpyObj('ShopService', ['getProducts']);
    
    // Configure the testing module
    TestBed.configureTestingModule({
      declarations: [ShopComponent, TitlebBarComponent, ProductCarouselComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, CarouselModule],
      providers: [
        provideMockStore({ initialState }), // Provide the NgRx mock store with initial state
        { provide: ShopService, useValue: mockShopService }, // Provide the mock ShopService
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Create the component fixture
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore); // Inject the NgRx mock store
    fixture.detectChanges();
  });

  //  Ensure the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //  Verify that the loadProducts action is dispatched on ngOnInit
  it('should dispatch loadProducts action on ngOnInit', () => {
    spyOn(mockStore, 'dispatch'); // Spy on the dispatch method
    component.ngOnInit();
    expect(mockStore.dispatch).toHaveBeenCalledOnceWith({ type: '[Shop Component] Load Products' });
  });

  // Verify that getProducts from ShopService is called on ngOnInit
  it('should call getProducts from ShopService on ngOnInit', async () => {
    const mockProducts = [
      // Mock product data
    ];
    mockShopService.getProducts.and.returnValue(of(mockProducts)); // Provide mock response

    await component.ngOnInit();
    console.log("checking", mockShopService.getProducts());

    expect(mockShopService.getProducts).toHaveBeenCalled();
  });

  //  Ensure "No Products Found..." element is falsy
  it('should "No Products Found..." be falsy', () => {
    const noProductsFoundText = fixture.nativeElement.querySelector('h3');
    expect(noProductsFoundText).toBeFalsy();
  });
});
