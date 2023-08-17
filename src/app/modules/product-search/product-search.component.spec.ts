import { ComponentFixture, TestBed, waitForAsync,tick,fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ProductSearchComponent } from './product-search.component';
import { ProductSearchService } from 'src/app/core/services/product-search.service';
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
    spyOn(component, 'fetchAndFilterProducts');
    
    component.search = '';
    component.fetchAndFilterProducts();

    expect(component.fetchAndFilterProducts).toHaveBeenCalled();
  });


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

