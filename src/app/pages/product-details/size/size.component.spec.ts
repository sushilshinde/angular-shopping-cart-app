
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SizeComponent } from './size.component';

describe('SizeComponent', () => {
  let component: SizeComponent;
  let fixture: ComponentFixture<SizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SizeComponent],
      imports: [FormsModule] // Import FormsModule for ngModel
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should update selected size when a size is selected', () => {
   
     const sizeRadioButton = fixture.nativeElement.querySelector('#size-1');
    sizeRadioButton.click();
    
     // Check if the clicked size radio button is selected
    expect(sizeRadioButton.checked).toBe(true);
    });
});
