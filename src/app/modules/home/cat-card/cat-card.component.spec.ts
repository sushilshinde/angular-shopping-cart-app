import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatCardComponent } from './cat-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card'; // Import other material modules if needed



describe('CatCardComponent', () => {
  let component: CatCardComponent;
  let fixture: ComponentFixture<CatCardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatCardComponent],
      imports: [
        MatCardModule,RouterTestingModule, // Include other material modules here if needed
      ],
    }).compileComponents();
  });
 

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should receive item and ind inputs', () => {
    const mockItem = { category: 'Mock Category', stocks: 10 };
    const mockInd = 1;

    component.item = mockItem;
    component.ind = mockInd;

    fixture.detectChanges();

    expect(component.item).toEqual(mockItem);
    expect(component.ind).toEqual(mockInd);
  });

  
});
