// Importing necessary modules and classes for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './navbar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MatIconModule } from '@angular/material/icon';

// Test suite for the NavbarComponent
describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  // Asynchronous setup before each test
  beforeEach(async () => {
    // Configuring the testing module with required imports and declarations
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, // For Router testing
        MatIconModule,
        StoreModule.forRoot({}), // Placeholder for @ngrx/store
      ],
      declarations: [NavbarComponent, CategoryListComponent],
    }).compileComponents();
  });

  // Synchronous setup before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test case: Ensure the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case: Ensure isAuthenticated is initialized to false
  it('should initialize isAuthenticated to false', () => {
    expect(component.isAuthenticated).toBe(false);
  });
});
