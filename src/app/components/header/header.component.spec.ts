
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header.component';
import { AuthenticationService } from 'src/app/pages/authentication/authentication.service';
import { ProductSearchService } from '../../pages/product-search/product-search.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoryListComponent } from '../navbar/category-list/category-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgControl } from '@angular/forms';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthenticationService;
  let searchService: ProductSearchService;
  let mockStore: MockStore;

  const initialState = {
    cart: {
      cartItem: [] // Initial cart state
    },
    auth: {
      userData: {}
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        ReactiveFormsModule,
      ],
      declarations: [HeaderComponent,NavbarComponent,CategoryListComponent],
      providers: [
        AuthenticationService,
        ProductSearchService,
        NgControl,
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthenticationService);
    searchService = TestBed.inject(ProductSearchService);
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should update search on search button click', () => {
  //   spyOn(searchService, 'updateSearch');
  //   const searchValue = 'example search';
  //   component.search = searchValue;
  //   const searchButton = fixture.nativeElement.querySelector('button[aria-label="Example icon-button with search icon"]');
  //   searchButton.click();
  //   expect(searchService.updateSearch).toHaveBeenCalledWith(searchValue);
  // });


  
});

