import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ProductSearchService } from 'src/app/core/services/product-search.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoryListComponent } from '../navbar/category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Router } from '@angular/router';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router:Router

  const mockStore = {
    select: (selector: any) => of({}), // Mock the store select method
    subscribe: (fn: (value: any) => void) => fn({}), // Mock the store subscription
  };

  const mockAuthService = {
    localLogout: jasmine.createSpy('localLogout'),
  };

  const mockSearchService = {
    updateSearch: jasmine.createSpy('updateSearch'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,MatToolbarModule,MatIconModule,MatDividerModule,MatMenuModule,RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [HeaderComponent,NavbarComponent,CategoryListComponent],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: AuthenticationService, useValue: mockAuthService },
        { provide: ProductSearchService, useValue: mockSearchService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update search and navigate on search', () => {
    component.search = 'sample search';

    spyOn(component.router, 'navigate');

    component.onSearch();

    
    expect(component.router.navigate).toHaveBeenCalledWith(['/product-search'], {
      queryParams: { q: 'sample search' },
    });
  });

  it('should unsubscribe from router and store on ngOnDestroy', () => {
    component.routerSubscription = new Subscription();
    component.storeSubscription = new Subscription();

    spyOn(component.routerSubscription, 'unsubscribe');
    spyOn(component.storeSubscription, 'unsubscribe');

    component.ngOnDestroy();

    expect(component.routerSubscription.unsubscribe).toHaveBeenCalled();
    expect(component.storeSubscription.unsubscribe).toHaveBeenCalled();
  });

  
});
