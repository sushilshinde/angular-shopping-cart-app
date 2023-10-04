// Import necessary modules for testing
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

// Import the components to be tested
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryListComponent } from './components/navbar/category-list/category-list.component';

// Describe the test suite for the AppComponent
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>; // Define the fixture variable in a wider scope

  // Configure the testing module before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        FormsModule,
      ],
      declarations: [AppComponent, HeaderComponent, NavbarComponent, CategoryListComponent],
      providers: [
        // Provide the mock store with an initial state
        provideMockStore({
          initialState: {} // Add your initial state here
        }),
      ],
    }).compileComponents(); // Compile the testing module
    fixture = TestBed.createComponent(AppComponent); // Create a component fixture
    component = fixture.componentInstance; // Get the component instance
  });

  // Test if the component is created successfully
  it('should create', () => {
    fixture.detectChanges(); // Detect changes in the fixture
    expect(component).toBeTruthy(); // Assert that the component is truthy (exists)
  });

  // Test the ngOnDestroy method to ensure unsubscribing from subscriptions
  it('should unsubscribe from subscription on ngOnDestroy', () => {
    fixture.detectChanges(); // Detect changes in the fixture
    const subscriptionMock = jasmine.createSpyObj('Subscription', ['unsubscribe']); // Create a spy object for the Subscription
    component.subscription = subscriptionMock; // Assign the spy object to the component's subscription

    component.ngOnDestroy(); // Call the ngOnDestroy lifecycle hook

    expect(subscriptionMock.unsubscribe).toHaveBeenCalled(); // Expect that the unsubscribe method was called
  });

  // Clean up the component fixture after each test
  afterEach(() => {
    fixture.destroy();
  });
});
