import { ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TrandyComponent } from './trandy.component';

describe('TrandyComponent', () => {
  let component: TrandyComponent;
  let fixture: ComponentFixture<TrandyComponent>;
  let httpMock: HttpTestingController;

  // Set up testing environment before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrandyComponent],
      imports: [RouterTestingModule, HttpClientTestingModule], 
    }).compileComponents();
    // Create component fixture and inject HttpTestingController
    fixture = TestBed.createComponent(TrandyComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Clean up and verify HTTP requests after each test
  afterEach(fakeAsync(() => {
    fixture.whenStable().then(() => {
      console.log('Verifying HTTP requests...');
      httpMock.verify(); // Verify that there are no pending requests
    });
  }));

  //  Ensure component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //  Fetch products from API
  it('should fetch products from API', fakeAsync(() => {
    const apiUrl = 'http://localhost:3000/team-d/products?trendy=true';
    const mockResponse = [/* ... mock data ... */];

    component.fetchProducts();
    const req = httpMock.expectOne(apiUrl);

    // Verify request method and simulate response
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
    console.log('Mock response flushed...');

    tick(); // Advance time to resolve async operations
    expect(component.products).toEqual(mockResponse);
  }));

  //  Navigate to product details
  it('should navigate to product details', () => {
    const navigateSpy = spyOn(component.router, 'navigate');
    const product = { id: 1, title: 'Product 1' };

    component.viewProductDetail(product);

    expect(navigateSpy).toHaveBeenCalledWith(['/product-details'], {
      queryParams: { product: JSON.stringify(product) },
    });
  });

  //  Unsubscribe from subscription on ngOnDestroy
  it('should unsubscribe from subscription on ngOnDestroy', () => {
    const subscriptionMock = jasmine.createSpyObj('Subscription', ['unsubscribe']);
    component.subscription = subscriptionMock;

    component.ngOnDestroy();

    expect(subscriptionMock.unsubscribe).toHaveBeenCalled();
  });

  // Clean up component fixture after each test
  afterEach(() => {
    fixture.destroy();
  });
});
