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

  it('should call getProducts from ShopService on ngOnInit', () => {
    component.ngOnInit();
    expect(mockShopService.getProducts).toHaveBeenCalled();
  });

  it('should "No Products Found..." be falsy', () => {
    const noProductsFoundText = fixture.nativeElement.querySelector('h3');
    expect(noProductsFoundText).toBeFalsy();
  });
  // Add more test cases for rendering product cards, etc.

});
