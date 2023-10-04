// Import necessary Angular testing modules and dependencies
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { OffersectionCardComponent } from 'src/app/components/offersection-card/offersection-card.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { TrandyComponent } from 'src/app/components/trandy/trandy.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { CatCardComponent } from './cat-card/cat-card.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';

// Describe block for HomeComponent testing
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // Configure testing module with necessary components and modules
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, CarouselComponent, OffersectionCardComponent, NavbarComponent, TrandyComponent, CatCardComponent, LoadingSpinnerComponent],
      imports: [RouterTestingModule, MatIconModule, HttpClientTestingModule, MatCardModule, NgbCarouselModule], // Import necessary modules
    }).compileComponents();
  });

  // Initialize the component and fixture before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test case to check if HomeComponent is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case to check if TrandyComponent is rendered
  it('should render trandy component', () => {
    const trandyComponent = fixture.nativeElement.querySelector('app-trandy');
    expect(trandyComponent).toBeTruthy();
  });

  // Test case to check if Category Card components are rendered
  it('should render category card components', () => {
    const catCardComponents = fixture.nativeElement.querySelectorAll('app-cat-card');
    expect(catCardComponents.length).toEqual(component.categories.length);
  });

  // Test case to check if OffersectionCardComponent is rendered
  it('should render offersection-card component', () => {
    const offerSectionCard = fixture.nativeElement.querySelector('app-offersection-card');
    expect(offerSectionCard).toBeTruthy();
  });
});
