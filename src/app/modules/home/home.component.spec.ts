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

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent,CarouselComponent,OffersectionCardComponent,NavbarComponent,TrandyComponent,CatCardComponent,LoadingSpinnerComponent],
      imports: [RouterTestingModule, MatIconModule,HttpClientTestingModule,MatCardModule,NgbCarouselModule], // Import necessary modules
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render trandy component', () => {
    const trandyComponent = fixture.nativeElement.querySelector('app-trandy');
    expect(trandyComponent).toBeTruthy();
  });
  it('should render category card components', () => {
    const catCardComponents = fixture.nativeElement.querySelectorAll('app-cat-card');
    expect(catCardComponents.length).toEqual(component.categories.length);
  });

  it('should render offersection-card component', () => {
    const offerSectionCard = fixture.nativeElement.querySelector('app-offersection-card');
    expect(offerSectionCard).toBeTruthy();
  });
});
