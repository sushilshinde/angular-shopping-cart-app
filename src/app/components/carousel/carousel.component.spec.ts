import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { By } from '@angular/platform-browser';

// Importing the component to be tested
import { CarouselComponent } from './carousel.component';

// Test suite for the CarouselComponent
describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  // Asynchronous setup before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent], // Declaring the component to be tested
      imports: [NgbCarouselModule], // Importing necessary modules
    }).compileComponents();
  });

  // Synchronous setup before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test case: Ensure the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case: Ensure carousel content is displayed when there is content
  it('should display carousel content when there is content', () => {
    // Arrange
    component.content = [
      {
        imgUrl: '../../../assets/images/carousel-1.jpg',
        title: 'Fashionable Dress',
      },
      {
        imgUrl: '../../../assets/images/carousel-2.jpg',
        title: 'Reasonable Price',
      },
    ];
    fixture.detectChanges();

    // Act
    const carouselSlides = fixture.nativeElement.querySelectorAll('.carousel-inner .carousel-item');
    const slideImages = fixture.nativeElement.querySelectorAll('img');
    const slideTitles = fixture.nativeElement.querySelectorAll('h2');

    // Assert
    expect(carouselSlides.length).toBe(2);
    expect(slideImages.length).toBe(2);
    expect(slideImages[0].getAttribute('src')).toBe('../../../assets/images/carousel-1.jpg');
    expect(slideImages[1].getAttribute('src')).toBe('../../../assets/images/carousel-2.jpg');
    expect(slideTitles.length).toBe(2);
    expect(slideTitles[0].textContent).toContain('Fashionable Dress');
    expect(slideTitles[1].textContent).toContain('Reasonable Price');
  });

  // Test case: Ensure carousel is not displayed when there is no content
  it('should not display carousel content when there is no content', () => {
    // Arrange
    component.content = [];
    fixture.detectChanges();

    // Act
    const carousel = fixture.nativeElement.querySelector('ngb-carousel');

    // Assert
    expect(carousel).toBeFalsy();
  });

  // Test case: Ensure "Shop Now" button click is triggered
  it('should trigger "Shop Now" button click', fakeAsync(() => {
    // Arrange
    component.content = [
      {
        imgUrl: 'test-url-1',
        title: 'Test Title 1',
      },
    ];
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.carousel-item a'));

    // Act
    const buttonElement = button.nativeElement;
    const clickSpy = spyOn(buttonElement, 'click');
    buttonElement.click();
    tick();

    // Assert
    expect(clickSpy).toHaveBeenCalled();
  }));
});
