// Import necessary testing utilities and dependencies
import { ComponentFixture, TestBed, waitForAsync, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

// Import the components and services being tested
import { ProductSearchComponent } from './product-search.component';
import { ProductSearchService } from 'src/app/core/services/product-search.service';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';

// Describe the test suite for ProductSearchComponent
describe('ProductSearchComponent', () => {
  // Declare variables for the component, fixture, and spies
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;
  let mockProductSearchService: jasmine.SpyObj<ProductSearchService>;
  let mockStore: MockStore;

  // Define an initial state for the NgRx store
  const initialState = {};

  // Configure the testing module before each test
  beforeEach(waitForAsync(() => {
    // Create a spy object for the ProductSearchService
    mockProductSearchService = jasmine.createSpyObj('ProductSearchService', ['getProductData']);

    // Configure the testing module with necessary declarations, imports, and providers
    TestBed.configureTestingModule({
      declarations: [ProductSearchComponent, ProductCardComponent],
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: {
            queryParamMap: of(convertToParamMap({ q: 'searchQuery' }))
          }
        },
        { provide: ProductSearchService, useValue: mockProductSearchService }
      ]
    }).compileComponents();
  }));

  // Configure the testing module before each test
  beforeEach(() => {
    // Create the component fixture
    fixture = TestBed.createComponent(ProductSearchComponent);

    // Retrieve the component instance
    component = fixture.componentInstance;

    // Inject the MockStore
    mockStore = TestBed.inject(MockStore);

    // Detect changes to trigger component initialization
    fixture.detectChanges();
  });

  // Test case: should create the component
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case: should call getProductData from ProductSearchService and update products on ngOnInit
  it('should call getProductData from ProductSearchService and update products on ngOnInit', () => {
    const mockProducts = [
      { id: 1, title: 'Product 1', price: 100 },
      { id: 2, title: 'Product 2', price: 200 }
    ];
    mockProductSearchService.getProductData.and.returnValue(of(mockProducts));

    component.ngOnInit();

    expect(mockProductSearchService.getProductData).toHaveBeenCalledWith('searchQuery');
    expect(component.products).toEqual(mockProducts);
  });

  // Test case: should call getProductData from ProductSearchService and update products when search query is present
  it('should call getProductData from ProductSearchService and update products when search query is present', () => {
    const mockProducts = [
      { id: 1, title: 'Product 1', price: 100 },
      { id: 2, title: 'Product 2', price: 200 }
    ];
    mockProductSearchService.getProductData.and.returnValue(of(mockProducts));

    component.search = 'newSearchQuery';
    component.fetchAndFilterProducts();

    expect(mockProductSearchService.getProductData).toHaveBeenCalledWith('newSearchQuery');
    expect(component.products).toEqual(mockProducts);
  });

  // Test case: should call fetchProducts when search query is empty
  it('should call fetchProducts when search query is empty', () => {
    spyOn(component, 'fetchAndFilterProducts');

    component.search = '';
    component.fetchAndFilterProducts();

    expect(component.fetchAndFilterProducts).toHaveBeenCalled();
  });

  // Test case: should fetch products from the server
  it('should fetch products from the server', fakeAsync(() => {
    const mockProducts = [
      { id: 1, title: 'Product 1', price: 100 },
      { id: 2, title: 'Product 2', price: 200 }
    ];
    mockProductSearchService.getProductData.and.returnValue(of(mockProducts));

    component.search = 'iphone';

    component.fetchAndFilterProducts();

    tick(); // Simulate the passage of time for the observable to complete

    expect(mockProductSearchService.getProductData).toHaveBeenCalledWith('iphone');
    expect(component.products).toEqual(mockProducts);
  }));
});
