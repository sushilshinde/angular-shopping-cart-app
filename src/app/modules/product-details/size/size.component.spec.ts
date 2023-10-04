// Import necessary Angular testing modules and the component to be tested
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SizeComponent } from './size.component';

// Describe block for SizeComponent tests
describe('SizeComponent', () => {
  let component: SizeComponent;
  let fixture: ComponentFixture<SizeComponent>;

  // Async configuration of the testing module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SizeComponent]
    }).compileComponents();
  });

  // Setup before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(SizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test case: should update selected size when a size is selected
  it('should update selected size when a size is selected', () => {
    const newSize = 'XS';
    const sizeRadioButton = fixture.nativeElement.querySelector('#size-1');
    sizeRadioButton.click();

    // Check if the clicked size radio button is selected
    expect(sizeRadioButton.checked).toBe(true);
  });

  // Test case: should have no radio buttons initially selected
  it('should have no radio buttons initially selected', () => {
    const sizeRadioButtons = fixture.nativeElement.querySelectorAll('[name="size"]');
    for (const radioButton of sizeRadioButtons) {
      expect(radioButton.checked).toBe(false);
    }
  });

  // Test case: should have unique IDs for radio buttons
  it('should have unique IDs for radio buttons', () => {
    const sizeRadioButtons = fixture.nativeElement.querySelectorAll('[name="size"]');
    const idSet = new Set();
    for (const radioButton of sizeRadioButtons) {
      const radioId = radioButton.getAttribute('id');
      expect(idSet.has(radioId)).toBe(false);
      idSet.add(radioId);
    }
  });

  // Test case: should have correct labels for radio buttons
  it('should have correct labels for radio buttons', () => {
    const labels = fixture.nativeElement.querySelectorAll('label');
    const expectedLabels = ['XS', 'S', 'M', 'L', 'XL'];
    for (let i = 0; i < labels.length; i++) {
      expect(labels[i].textContent.trim()).toBe(expectedLabels[i]);
    }
  });
});
