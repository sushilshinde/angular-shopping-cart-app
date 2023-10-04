// Import necessary modules from Angular and RxJS for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AuthenticationComponent } from './authentication.component';

// Test suite for the AuthenticationComponent
describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;
  let mockStore: any;

  beforeEach(() => {
    // Create a mock observable that resembles your real store's behavior
    const mockAuthObservable = of({
      isLoading: false,
      userData: {},
      error: "",
    });
  
    // Create a spy object for the store with mocked select and dispatch methods
    mockStore = jasmine.createSpyObj(['select', 'dispatch']);
    mockStore.select.and.returnValue(mockAuthObservable);
  
    // Configure the testing module with necessary declarations, imports, and providers
    TestBed.configureTestingModule({
      declarations: [AuthenticationComponent],
      imports: [FormsModule],
      providers: [
        { provide: Store, useValue: mockStore }, // Provide the mock store
        {
          provide: ActivatedRoute,
          useValue: {
            url: of([{ path: 'login' }]), // Provide a mock value for url
          },
        },
      ],
    });
  
    // Create an instance of the component for testing
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    component.isLogin = true; // Set isLogin property directly
  });
  

  // Test case to check if the component is created successfully
  it('should create', () => {
    fixture.detectChanges(); // Trigger change detection
    expect(component).toBeTruthy(); // Assertion to check if the component is created
  });

  

});
