import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ShopComponent } from './shop.component';
import { ShopState } from '../../store/shop.model';
import { RouterTestingModule } from '@angular/router/testing';
import { ShopService } from '../../store/shop.service';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule} from '@angular/common/http/testing'; 
import { TitlebBarComponent } from 'src/app/components/title-bar/title-bar.component';
import { ProductCarouselComponent } from '../product-details/product-carousel/product-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;
  let mockStore: MockStore;
  let store: Store<ShopState>;
  let mockShopService: jasmine.SpyObj<ShopService>;

  const initialState: ShopState = {
    products: [],
    loading: false,
    error: null,
  };
 

  beforeEach(waitForAsync(() => {
    mockShopService = jasmine.createSpyObj('ShopService', ['getProducts']);
    TestBed.configureTestingModule({
      declarations: [ShopComponent,TitlebBarComponent,ProductCarouselComponent],
      imports: [RouterTestingModule, HttpClientTestingModule,CarouselModule],
      providers: [
        provideMockStore({ initialState }),
        { provide: ShopService, useValue: mockShopService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadProducts action on ngOnInit', () => {
    spyOn(mockStore, 'dispatch');
    component.ngOnInit();
    expect(mockStore.dispatch).toHaveBeenCalledOnceWith({ type: '[Shop Component] Load Products' });
  });

  it('should call getProducts from ShopService on ngOnInit', async() => {
    const mockProducts = [
      {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "electronic",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ],
        "trendy": true
      }
      
    ];
    mockShopService.getProducts.and.returnValue(of(mockProducts));

    await component.ngOnInit();
    console.log("checking",mockShopService.getProducts())

    expect(mockShopService.getProducts).toHaveBeenCalled();
   
  });

  it('should "No Products Found..." be falsy', () => {
    const noProductsFoundText = fixture.nativeElement.querySelector('h3');
    expect(noProductsFoundText).toBeFalsy();
  });
 

});
