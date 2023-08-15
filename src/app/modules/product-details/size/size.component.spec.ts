import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SizeComponent } from './size.component';

describe('SizeComponent', () => {
  let component: SizeComponent;
  let fixture: ComponentFixture<SizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SizeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should update selected size when a size is selected', () => {
    const newSize = 'XS';
    const sizeRadioButton = fixture.nativeElement.querySelector('#size-1');
    sizeRadioButton.click();

    // Check if the clicked size radio button is selected
    expect(sizeRadioButton.checked).toBe(true);
  });

  // it('should only allow one size to be selected at a time', () => {
  //   const sizeRadioButtons = fixture.nativeElement.querySelectorAll('[name="size"]');
  //   const sizeM = fixture.nativeElement.querySelector('#size-3');
  //   const sizeL = fixture.nativeElement.querySelector('#size-4');

  //   sizeM.click();
  //   fixture.detectChanges();
  //   expect(sizeM.checked).toBe(true);
  //   expect(sizeL.checked).toBe(false);

  //   sizeL.click();
  //   fixture.detectChanges();
  //   expect(sizeM.checked).toBe(false);
  //   expect(sizeL.checked).toBe(true);
  // });

  // it('should update selectedSize when different sizes are selected', () => {
  //   const newSize = 'L';
  //   const sizeRadioButton = fixture.nativeElement.querySelector('#size-4');
  //   sizeRadioButton.click();

  //   expect(component.selectedSize).toBe(newSize);
  // });

  // it('should not change selectedSize when clicking the same size twice', () => {
  //   const initialSize = 'XL';
  //   component.selectedSize = initialSize;
  //   fixture.detectChanges();

  //   const sizeRadioButton = fixture.nativeElement.querySelector('#size-5');
  //   sizeRadioButton.click();
  //   fixture.detectChanges();
  //   sizeRadioButton.click();
  //   fixture.detectChanges();

  //   expect(component.selectedSize).toBe(initialSize);
  // });

  // it('should associate labels with correct radio buttons', () => {
  //   const labels = fixture.nativeElement.querySelectorAll('label');
  //   for (const label of labels) {
  //     const radioId = label.getAttribute('for');
  //     const radioButton = fixture.nativeElement.querySelector(`#${radioId}`);
  //     label.click();
  //     fixture.detectChanges();
  //     expect(radioButton.checked).toBe(true);
  //   }
  // });

  it('should have no radio buttons initially selected', () => {
    const sizeRadioButtons = fixture.nativeElement.querySelectorAll('[name="size"]');
    for (const radioButton of sizeRadioButtons) {
      expect(radioButton.checked).toBe(false);
    }
  });

  it('should have unique IDs for radio buttons', () => {
    const sizeRadioButtons = fixture.nativeElement.querySelectorAll('[name="size"]');
    const idSet = new Set();
    for (const radioButton of sizeRadioButtons) {
      const radioId = radioButton.getAttribute('id');
      expect(idSet.has(radioId)).toBe(false);
      idSet.add(radioId);
    }
  });

  it('should have correct labels for radio buttons', () => {
    const labels = fixture.nativeElement.querySelectorAll('label');
    const expectedLabels = ['XS', 'S', 'M', 'L', 'XL'];
    for (let i = 0; i < labels.length; i++) {
      expect(labels[i].textContent.trim()).toBe(expectedLabels[i]);
    }
  });
});
