// Import necessary Angular testing modules and dependencies
import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ColorRadioComponent } from './color-radio.component';
import { ColorsComponent } from './colors.component'; // Adjust the path to your component
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// Describe block for ColorRadioComponent tests
describe('ColorRadioComponent', () => {
  let component: ColorsComponent; // Instance of the ColorsComponent
  let fixture: ComponentFixture<ColorsComponent>; // ComponentFixture for ColorsComponent
  let debugElement: DebugElement; // DebugElement for inspecting the component

  // Async configuration of the testing module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorsComponent], // Component to be tested
    }).compileComponents();
  });

  // Setup before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  // Test case: should create
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case: should render color radio buttons
  it('should render color radio buttons', () => {
    const radioLabels = debugElement.queryAll(By.css('.custom-control-label'));
    expect(radioLabels.length).toBe(5); // Assuming there are 5 color radio buttons

    const labelTexts = ['Black', 'White', 'Red', 'Blue', 'Green'];

    // Check if each radio button label has the correct text content
    radioLabels.forEach((radioLabel, index) => {
      const labelElement: HTMLLabelElement = radioLabel.nativeElement;
      expect(labelElement.textContent.trim()).toBe(labelTexts[index]);
    });
  });
});
