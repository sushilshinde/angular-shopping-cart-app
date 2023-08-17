import { ComponentFixture, fakeAsync, TestBed, tick,waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { TrandyComponent } from './trandy.component';

describe('TrandyComponent', () => {
  let component: TrandyComponent;
  let fixture: ComponentFixture<TrandyComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrandyComponent],
      imports: [RouterTestingModule, HttpClientTestingModule], // Import necessary testing modules
    }).compileComponents();
    fixture = TestBed.createComponent(TrandyComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController); // Inject HttpTestingController
  });
  afterEach(fakeAsync(() => {
    fixture.whenStable().then(() => {
      console.log('Verifying HTTP requests...');
      httpMock.verify(); // Verify that there are no pending requests
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  


  it('should fetch products from API', fakeAsync(() => {
    const apiUrl = 'http://localhost:3000/team-d/products?trendy=true';
    const mockResponse = [{
      "id": 1,
      // ...
    }];

    component.fetchProducts();
  
    const req = httpMock.expectOne(apiUrl);
    console.log('Expecting a GET request...');
  
    expect(req.request.method).toBe('GET');
  
    // Act
    req.flush(mockResponse);
    console.log('Mock response flushed...');
  
    tick();
    console.log('Time ticked...');
  
    // Assert
    console.log('Expecting component.products to match mock response...');
    console.log('component.products:', component.products);
    console.log('mockResponse:', mockResponse);
  
    expect(component.products).toEqual(mockResponse);
  
    console.log('Test completed.');
  }));
  

  it('should navigate to product details', () => {
    const navigateSpy = spyOn(component.router, 'navigate');
    const product = { id: 1, title: 'Product 1' };

    component.viewProductDetail(product);

    expect(navigateSpy).toHaveBeenCalledWith(['/product-details'], {
      queryParams: { product: JSON.stringify(product) },
    });
  });
  it('should unsubscribe from subscription on ngOnDestroy', () => {
    const subscriptionMock = jasmine.createSpyObj('Subscription', ['unsubscribe']);
    component.subscription = subscriptionMock;

    component.ngOnDestroy();

    expect(subscriptionMock.unsubscribe).toHaveBeenCalled();
  });
  afterEach(() => {
    fixture.destroy(); // Clean up the component fixture
  });

});
