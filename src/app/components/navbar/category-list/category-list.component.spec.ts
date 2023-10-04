// Importing necessary modules and classes for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryListComponent } from './category-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree'; 

// Test suite for the CategoryListComponent
describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;

  // Asynchronous setup before each test
  beforeEach(async () => {
    // Configuring the testing module with required imports and declarations
    await TestBed.configureTestingModule({
      declarations: [CategoryListComponent],
      imports: [RouterTestingModule, MatIconModule, MatTreeModule], // Import necessary modules
    }).compileComponents();
  });

  // Synchronous setup before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test case: Ensure the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case: Ensure toggling of category list on click
  it('should toggle category list on click', () => {
    const link = fixture.nativeElement.querySelector('a');
    link.click();
    fixture.detectChanges();
    expect(component.isCatOpen).toBe(false);

    link.click();
    fixture.detectChanges();
    expect(component.isCatOpen).toBe(true);
  });

  // Test case: Ensure rendering of category items
  it('should render category items', () => {
    const categoryItems = fixture.nativeElement.querySelectorAll('li');
    console.log('Found category items:', categoryItems);
  
    expect(categoryItems.length).toEqual(component.catList.length);
  
    categoryItems.forEach((link, index) => {
      console.log('Checking category item at index', index);
      console.log('Expected:', component.catList[index]);
      console.log('Actual:', link.textContent.trim());
      expect(link.innerText.trim()).toEqual(component.catList[index]);
    });
  });
});
