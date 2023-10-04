// Import necessary Angular testing modules and dependencies
import { ComponentFixture, TestBed, tick, fakeAsync, flush } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductCarouselComponent } from './product-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Describe block for ProductCarouselComponent tests
describe('ProductCarouselComponent', () => {
  let component: ProductCarouselComponent;
  let fixture: ComponentFixture<ProductCarouselComponent>;
  let httpMock: HttpTestingController;

  // Async configuration of the testing module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCarouselComponent], // Component to be tested
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        CarouselModule,
        MatDividerModule,
        MatCardModule,
        MatIconModule,
      ],
    }).compileComponents();
  });

  // Setup before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarouselComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController); 
    fixture.detectChanges();
  });

  // Test case: should create
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case: should fetch products from API
  it('should fetch products from API', fakeAsync(() => {
    const apiUrl = 'https://fakestoreapi.com/products';
    const mockProducts = [
      // Mock product data
      {
        "id": 1,
        "title": "iPhone 9",
        // ... other properties
      }
    ];

    // Trigger product fetching
    component.fetchProducts();
    const req = httpMock.match(apiUrl);
    expect(req[0].request.method).toBe('GET');

    // Simulate a successful API response
    req[0].flush(mockProducts);
    tick();
    fixture.detectChanges();
    flush();

    // Check if products are correctly assigned after fetching
    expect(component.products).toEqual(mockProducts);
  }));

  // Test case: should render product cards
  it('should render product cards', () => {
    const products = [
      // Mock product data
      {
        "id": 1,
        "title": "iPhone 9",
        // ... other properties
      }
    ];

    // Assign products to the component
    component.products = products;
    fixture.detectChanges();

    // Get the rendered product cards
    const productCards = fixture.nativeElement.querySelectorAll('.product-container');

    // Check the correct number of product cards
    expect(productCards.length).toBe(5); // Assuming 5 is the expected number

    // Check the content of the first product card
    const firstProductTitle = productCards[0].querySelector('.text-lg')?.textContent;
    expect(firstProductTitle).toContain(products[0].title);
  });
});
