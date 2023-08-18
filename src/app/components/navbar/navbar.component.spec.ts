import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './navbar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MatIconModule } from '@angular/material/icon';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, // For Router testing
        MatIconModule,
        StoreModule.forRoot({}), // Placeholder for @ngrx/store
      ],
      declarations: [NavbarComponent,CategoryListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isAuthenticated to false', () => {
    expect(component.isAuthenticated).toBe(false);
  });
  
});
