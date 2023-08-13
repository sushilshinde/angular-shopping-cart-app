import { ComponentFixture, TestBed,tick ,fakeAsync,flush} from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductCarouselComponent } from './product-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('ProductCarouselComponent', () => {
  let component: ProductCarouselComponent;
  let fixture: ComponentFixture<ProductCarouselComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCarouselComponent],
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

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarouselComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController); 
    fixture.detectChanges();
  });
  
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products from API', fakeAsync(() => {
    const apiUrl = 'https://fakestoreapi.com/products';
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

    component.fetchProducts();
    const req = httpMock.match(apiUrl);
    expect(req[0].request.method).toBe('GET');

    req[0].flush(mockProducts);
    tick();
    fixture.detectChanges()
    flush();
    expect(component.products).toEqual(mockProducts);
  }));

  it('should render product cards', () => {
    const products = [
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
    
    component.products = products;
    console.log(products)
    fixture.detectChanges();
  
    const productCards = fixture.nativeElement.querySelectorAll('.product-container');
    expect(productCards.length).toBe(5); // Check the correct number of product cards

    // Check the content of the first product card
    const firstProductTitle = productCards[0].querySelector('.text-lg')?.textContent;
    expect(firstProductTitle).toContain(products[0].title);
  });
  

});
