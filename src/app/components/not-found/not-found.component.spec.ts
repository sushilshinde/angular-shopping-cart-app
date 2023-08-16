import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
    });
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the "Page Not Found" message', () => {
    const pageNotFoundMessage = fixture.nativeElement.querySelector('h1');
    expect(pageNotFoundMessage.textContent).toContain('Page Not Found');
  });

  it('should have the correct CSS class for centering', () => {
    const centeringDiv = fixture.nativeElement.querySelector('.flex-center');
    expect(centeringDiv).toBeTruthy();
  });
});
