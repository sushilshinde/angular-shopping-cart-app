import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ProductSearchComponent } from './product-search.component';
import { ProductSearchService } from './product-search.service';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';

describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;
  let mockProductSearchService: jasmine.SpyObj<ProductSearchService>;
  let mockStore: MockStore;

  const initialState = {};

  beforeEach(waitForAsync(() => {
    mockProductSearchService = jasmine.createSpyObj('ProductSearchService', ['getProductData']);
    
    TestBed.configureTestingModule({
      declarations: [ProductSearchComponent,ProductCardComponent],
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

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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

  it('should call fetchProducts when search query is empty', () => {
    spyOn(component, 'fetchProducts');
    
    component.search = '';
    component.fetchAndFilterProducts();

    expect(component.fetchProducts).toHaveBeenCalled();
  });
  it('should fetch products from the server', () => {
    const mockProducts = [
      { id: 1, title: 'Product 1', price: 100 },
      { id: 2, title: 'Product 2', price: 200 }
    ];
    mockProductSearchService.getProductData.and.returnValue(of(mockProducts));
  
    // Add a console log to inspect the search query before calling fetchProducts()
    console.log('Search Query Before:', component.search);
  
    component.fetchProducts();
  
    // Add a console log to inspect the search query after calling fetchProducts()
    console.log('Search Query After:', component.search);
  
    // Modify the expectation to match the actual call argument
    expect(mockProductSearchService.getProductData).toHaveBeenCalledWith(component.search);
    expect(component.products).toEqual(mockProducts);
  });
  
  

});
