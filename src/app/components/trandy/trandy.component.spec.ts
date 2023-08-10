import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

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

  afterEach(() => {
    httpMock.verify(); // Verify that there are no pending requests
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should display correct title', () => {
    component.title1 = 'Trandy Products';
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('h1'); 
    expect(titleElement.textContent).toContain('Trandy Products');
  });
  

  it('should fetch products from API', () => {
    const apiUrl = 'http://localhost:3000/products?trendy=true';
    const mockResponse = [ {
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
    }];

    component.fetchProducts();

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);

    expect(component.products).toEqual(mockResponse);
  });

  it('should navigate to product details', () => {
    const navigateSpy = spyOn(component.router, 'navigate');
    const product = { id: 1, title: 'Product 1' };

    component.viewProductDetail(product);

    expect(navigateSpy).toHaveBeenCalledWith(['/product-details'], {
      queryParams: { product: JSON.stringify(product) },
    });
  });

  

});
