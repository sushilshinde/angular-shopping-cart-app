import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { By } from '@angular/platform-browser';
import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
 let component: CarouselComponent;
 let fixture: ComponentFixture<CarouselComponent>;

 beforeEach(async () => {
await TestBed.configureTestingModule({
declarations: [CarouselComponent],
imports: [NgbCarouselModule], 
}).compileComponents();
});

beforeEach(() => {
 fixture = TestBed.createComponent(CarouselComponent);
 component = fixture.componentInstance;
 fixture.detectChanges();
});

 it('should create', () => {
 expect(component).toBeTruthy();
});

 it('should display carousel content when there is content', () => {
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

 const carouselSlides = fixture.nativeElement.querySelectorAll('.carousel-inner .carousel-item');
 expect(carouselSlides.length).toBe(2);

 const slideImages = fixture.nativeElement.querySelectorAll('img');
 expect(slideImages.length).toBe(2);
expect(slideImages[0].getAttribute('src')).toBe('../../../assets/images/carousel-1.jpg');
expect(slideImages[1].getAttribute('src')).toBe('../../../assets/images/carousel-2.jpg');

 const slideTitles = fixture.nativeElement.querySelectorAll('h2');
 expect(slideTitles.length).toBe(2);
 expect(slideTitles[0].textContent).toContain('Fashionable Dress');
 expect(slideTitles[1].textContent).toContain('Reasonable Price');
});

 it('should not display carousel content when there is no content', () => {
 component.content = [];
 fixture.detectChanges();

 const carousel = fixture.nativeElement.querySelector('ngb-carousel');
 expect(carousel).toBeFalsy();
});
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

