import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandyComponent } from './trandy.component';

describe('TrandyComponent', () => {
  let component: TrandyComponent;
  let fixture: ComponentFixture<TrandyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrandyComponent]
    });
    fixture = TestBed.createComponent(TrandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
