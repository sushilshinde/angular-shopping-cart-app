import { TestBed,ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing'; // Import the provideMockStore function
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryListComponent } from './components/navbar/category-list/category-list.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component:AppComponent;
  let fixture: ComponentFixture<AppComponent>;// Define the fixture variable in a wider scope

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatToolbarModule, MatIconModule, MatMenuModule, MatDividerModule, FormsModule],
      declarations: [AppComponent, HeaderComponent, NavbarComponent, CategoryListComponent],
      providers: [
        // Provide the mock store with an initial state
        provideMockStore({
          initialState: {} // Add your initial state here
        }),
      ],
    }).compileComponents();;
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  

  
   // Unsubscribe from subscription on ngOnDestroy
  it('should unsubscribe from subscription on ngOnDestroy', () => {
    fixture.detectChanges();
    const subscriptionMock = jasmine.createSpyObj('Subscription', ['unsubscribe']);
    component.subscription = subscriptionMock;

    component.ngOnDestroy();

    expect(subscriptionMock.unsubscribe).toHaveBeenCalled();
  });

  afterEach(() => {
    fixture.destroy(); // Clean up the component fixture
  });
});
