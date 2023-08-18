import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CategoryPageComponent } from './category-page.component';
import * as fromCatAction from './category-store/cat-page.action';
import * as fromCatReducer from './category-store/cat-page.reducer';
import { filterData } from 'src/helper/filter';
import { Observable, of } from 'rxjs';
import { TitlebBarComponent } from 'src/app/components/title-bar/title-bar.component';
import { FilterCard } from './components/filterCard/filtercard.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CategoryPageComponent', () => {
  let component: CategoryPageComponent;
  let fixture: ComponentFixture<CategoryPageComponent>;
  let store: MockStore;
  const mockRoute = {
    params: {
      subscribe: (fn: (value: any) => void) => fn({ cat: 'someCategory' })
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryPageComponent,TitlebBarComponent,FilterCard],
      imports:[MatDividerModule,MatIconModule,FormsModule,RouterTestingModule],
      providers: [
        provideMockStore({
          initialState: {
            cat: {
              catProduct: []
            }
          }
        }),
        {
          provide: ActivatedRoute,
          useValue: mockRoute
        }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();

    spyOn(store, 'dispatch');
    spyOn(store, 'select').and.returnValue(of({ catProduct: [] }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 it('should dispatch LoadCatData action on ngOnInit', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(new fromCatAction.LoadCatData('someCategory'));
  });
  
   it('should set isLoading to true and then false after calling setLoader', () => {
    component.setLoader();
    expect(component.isLoading).toBe(true);

    setTimeout(() => {
      expect(component.isLoading).toBe(false);
    }, 500);
  });
   it('should clear searchQuery and reset product array on clearQuery', () => {
    component.refArray = [{ id: 1, title: 'Product 1' }, { id: 2, title: 'Product 2' }];
    component.product = [{ id: 1, title: 'Product 1' }];
    component.searchQuery = 'search query';

    component.clearQuery();

    expect(component.searchQuery).toBe('');
    expect(component.product).toEqual(component.refArray);
  });

   it('should update priceRange correctly on handlePriceArray', () => {
    const priceArray = ['10,20', '30,40'];
    component.handlePriceArray(priceArray);
    expect(component.priceRange).toEqual([10, 40]);
  });
});
