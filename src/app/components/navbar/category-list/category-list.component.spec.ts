import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryListComponent } from './category-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree'; 
import { Router } from '@angular/router';

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryListComponent],
      imports: [RouterTestingModule, MatIconModule, MatTreeModule], // Import necessary modules
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle category list on click', () => {
    const link = fixture.nativeElement.querySelector('a');
    link.click();
    fixture.detectChanges();
    expect(component.isCatOpen).toBe(false);

    link.click();
    fixture.detectChanges();
    expect(component.isCatOpen).toBe(true);
  });

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
