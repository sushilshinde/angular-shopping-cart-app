// Import necessary Angular testing modules and dependencies
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CategoryPageComponent } from './category-page.component';
import * as fromCatAction from './category-store/cat-page.action';
import { of } from 'rxjs';
import { TitlebBarComponent } from 'src/app/components/title-bar/title-bar.component';
import { FilterCard } from './components/filterCard/filtercard.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

// Test suite for the CategoryPageComponent
describe('CategoryPageComponent', () => {
  let component: CategoryPageComponent;
  let fixture: ComponentFixture<CategoryPageComponent>;
  let store: MockStore;
  // Mock ActivatedRoute to provide route parameters
  const mockRoute = {
    params: {
      subscribe: (fn: (value: any) => void) => fn({ cat: 'someCategory' })
    }
  };

  // Configuration before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryPageComponent, TitlebBarComponent, FilterCard],
      imports: [MatDividerModule, MatIconModule, FormsModule, RouterTestingModule],
      providers: [
        // Provide a mock store with an initial state
        provideMockStore({
          initialState: {
            cat: {
              catProduct: []
            }
          }
        }),
        // Provide a mock ActivatedRoute
        {
          provide: ActivatedRoute,
          useValue: mockRoute
        }
      ],
    }).compileComponents();
  });

  // Initialization before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();

    // Spy on store dispatch and select methods
    spyOn(store, 'dispatch');
    spyOn(store, 'select').and.returnValue(of({ catProduct: [] }));
  });

  // Test case: should create
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case: should dispatch LoadCatData action on ngOnInit
  it('should dispatch LoadCatData action on ngOnInit', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(new fromCatAction.LoadCatData('someCategory'));
  });

  // Test case: should set isLoading to true and then false after calling setLoader
  it('should set isLoading to true and then false after calling setLoader', () => {
    component.setLoader();
    expect(component.isLoading).toBe(true);

    // Simulate a delay and check isLoading after the delay
    setTimeout(() => {
      expect(component.isLoading).toBe(false);
    }, 500);
  });

  // Test case: should clear searchQuery and reset product array on clearQuery
  it('should clear searchQuery and reset product array on clearQuery', () => {
    component.refArray = [{ id: 1, title: 'Product 1' }, { id: 2, title: 'Product 2' }];
    component.product = [{ id: 1, title: 'Product 1' }];
    component.searchQuery = 'search query';

    component.clearQuery();

    expect(component.searchQuery).toBe('');
    expect(component.product).toEqual(component.refArray);
  });

  // Test case: should update priceRange correctly on handlePriceArray
  it('should update priceRange correctly on handlePriceArray', () => {
    const priceArray = ['10,20', '30,40'];
    component.handlePriceArray(priceArray);
    expect(component.priceRange).toEqual([10, 40]);
  });
});
