
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitlebBarComponent } from './title-bar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TitleBarComponent', () => {
  let component: TitlebBarComponent;
  let fixture: ComponentFixture<TitlebBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitlebBarComponent],
      imports:[RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlebBarComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the pageTitle and subTitle', () => {
    const pageTitle = 'Test Page';
    const subTitle = 'Sub Title';
    component.pageTitle = pageTitle;
    component.subTitle = subTitle;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const titleElement = compiled.querySelector('h1');
    const subTitleElement = compiled.querySelector('span');

    expect(titleElement.textContent).toContain(pageTitle.toUpperCase());
    expect(subTitleElement.textContent).toContain(subTitle);
  });
});

