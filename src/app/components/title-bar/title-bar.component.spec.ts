import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlebBarComponent } from './title-bar.component';

describe('TitlebBarComponent', () => {
  let component: TitlebBarComponent;
  let fixture: ComponentFixture<TitlebBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitlebBarComponent]
    });
    fixture = TestBed.createComponent(TitlebBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
