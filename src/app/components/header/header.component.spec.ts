// Importing necessary modules and classes for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoryListComponent } from '../navbar/category-list/category-list.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ProductSearchService } from 'src/app/core/services/product-search.service';

// Test suite for the HeaderComponent
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router; // Declare router variable

  // Mock store object for testing
  const mockStore = {
    select: (selector: any) => of({}), // Mock the store select method
    subscribe: (fn: (value: any) => void) => fn({}), // Mock the store subscription
  };

  // Mock authentication service for testing
  const mockAuthService = {
    localLogout: jasmine.createSpy('localLogout'), // Mock the localLogout method
  };

  // Mock product search service for testing
  const mockSearchService = {
    updateSearch: jasmine.createSpy('updateSearch'), // Mock the updateSearch method
  };

  // Asynchronous setup before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatMenuModule,
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
      ],
      declarations: [HeaderComponent, NavbarComponent, CategoryListComponent],
      providers: [
        { provide: Store, useValue: mockStore }, // Provide the mock store
        { provide: AuthenticationService, useValue: mockAuthService }, // Provide the mock authentication service
        { provide: ProductSearchService, useValue: mockSearchService }, // Provide the mock search service
      ],
    }).compileComponents();
  });

  // Synchronous setup before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test case: Ensure the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case: Ensure search is updated and navigation is triggered on search
  it('should update search and navigate on search', () => {
    // Arrange
    component.search = 'sample search';

    spyOn(component.router, 'navigate');

    // Act
    component.onSearch();

    // Assert
    expect(component.router.navigate).toHaveBeenCalledWith(['/product-search'], {
      queryParams: { q: 'sample search' },
    });
  });

  // Test case: Ensure unsubscribing from router and store on ngOnDestroy
  it('should unsubscribe from router and store on ngOnDestroy', () => {
    // Arrange
    component.routerSubscription = new Subscription();
    component.storeSubscription = new Subscription();

    spyOn(component.routerSubscription, 'unsubscribe');
    spyOn(component.storeSubscription, 'unsubscribe');

    // Act
    component.ngOnDestroy();

    // Assert
    expect(component.routerSubscription.unsubscribe).toHaveBeenCalled();
    expect(component.storeSubscription.unsubscribe).toHaveBeenCalled();
  });
});
