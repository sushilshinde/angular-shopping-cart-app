// Importing necessary modules and components for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitlebBarComponent } from './title-bar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TitleBarComponent', () => {
  let component: TitlebBarComponent;
  let fixture: ComponentFixture<TitlebBarComponent>;

  // Asynchronous setup before each test
  beforeEach(async () => {
    // Configuring the testing module with the component and necessary imports
    await TestBed.configureTestingModule({
      declarations: [TitlebBarComponent],
      imports: [RouterTestingModule], // Including RouterTestingModule for router-related testing
    }).compileComponents();
  });

  // Synchronous setup before each test
  beforeEach(() => {
    // Creating a fixture and component for testing
    fixture = TestBed.createComponent(TitlebBarComponent);
    component = fixture.componentInstance;
  });

  // Test case: Checking if the component is created successfully
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Test case: Checking if the pageTitle and subTitle are displayed correctly
  it('should display the pageTitle and subTitle', () => {
    // Setting values for pageTitle and subTitle
    const pageTitle = 'Test Page';
    const subTitle = 'Sub Title';
    component.pageTitle = pageTitle;
    component.subTitle = subTitle;
    fixture.detectChanges(); // Triggering change detection

    // Accessing the compiled HTML to check the displayed content
    const compiled = fixture.nativeElement;
    const titleElement = compiled.querySelector('h1');
    const subTitleElement = compiled.querySelector('span');

    // Expecting the title element to contain the uppercase pageTitle and subTitle element to contain the subTitle
    expect(titleElement.textContent).toContain(pageTitle.toUpperCase());
    expect(subTitleElement.textContent).toContain(subTitle);
  });
});
