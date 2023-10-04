// Importing necessary modules from Angular testing and material
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatCardComponent } from './cat-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card'; // Import other material modules if needed

// Describe block for CatCardComponent testing
describe('CatCardComponent', () => {
  let component: CatCardComponent;
  let fixture: ComponentFixture<CatCardComponent>;

  // Asynchronous setup before each test
  beforeEach(async () => {
    // Configuring the testing module
    await TestBed.configureTestingModule({
      declarations: [CatCardComponent], // Components to test
      imports: [
        MatCardModule, // Material modules needed for testing
        RouterTestingModule, // Router testing module
        // Include other material modules here if needed
      ],
    }).compileComponents(); // Compile components asynchronously
  });

  // Synchronous setup before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(CatCardComponent);
    component = fixture.componentInstance;
  });

  // Test: Ensure the component is created successfully
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Test: Ensure the component receives item and ind inputs correctly
  it('should receive item and ind inputs', () => {
    // Mock item and index values
    const mockItem = { category: 'Mock Category', stocks: 10 };
    const mockInd = 1;

    // Set the inputs with mock values
    component.item = mockItem;
    component.ind = mockInd;

    // Trigger change detection
    fixture.detectChanges();

    // Expect the inputs to match the mock values
    expect(component.item).toEqual(mockItem);
    expect(component.ind).toEqual(mockInd);
  });
});
