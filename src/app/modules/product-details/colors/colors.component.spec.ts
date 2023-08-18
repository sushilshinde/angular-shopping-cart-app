

import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ColorRadioComponent } from './color-radio.component';
import { ColorsComponent } from './colors.component';
// Adjust the path to your component
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ColorRadioComponent', () => {
  let component: ColorsComponent;
  let fixture: ComponentFixture<ColorsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render color radio buttons', () => {
    const radioLabels = debugElement.queryAll(By.css('.custom-control-label'));
    expect(radioLabels.length).toBe(5);

    const labelTexts = ['Black', 'White', 'Red', 'Blue', 'Green'];

    radioLabels.forEach((radioLabel, index) => {
      const labelElement: HTMLLabelElement = radioLabel.nativeElement;
      expect(labelElement.textContent.trim()).toBe(labelTexts[index]);
    });
  });
});


