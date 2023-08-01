import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersectionCardComponent } from './offersection-card.component';

describe('OffersectionCardComponent', () => {
  let component: OffersectionCardComponent;
  let fixture: ComponentFixture<OffersectionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersectionCardComponent]
    });
    fixture = TestBed.createComponent(OffersectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
