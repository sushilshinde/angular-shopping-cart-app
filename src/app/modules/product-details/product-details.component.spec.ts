import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { ProductDetailsComponent } from './product-details.component';
import { ShopService } from '../../core/services/shop.service';
import { Store } from '@ngrx/store';
import { TitlebBarComponent } from 'src/app/components/title-bar/title-bar.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { ColorsComponent } from './colors/colors.component';
import { SizeComponent } from './size/size.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



describe('ProductDetailsComponent', () => {
let component: ProductDetailsComponent;
 let fixture: ComponentFixture<ProductDetailsComponent>;
 let mockShopService;
 let mockStore;

 const mockProductData = {
 _id: 1,
title: 'Product Title',
 // ... other properties
 };

beforeEach(() => {
 mockShopService = jasmine.createSpyObj(['getProductById']);
 mockShopService.getProductById.and.returnValue(of({ data: mockProductData }));

 mockStore = {
 select: jasmine.createSpy('select').and.returnValue(of({ auth: { userData: {} }, cart: { cartItem: [] } })),
 dispatch: jasmine.createSpy('dispatch')
 };

 TestBed.configureTestingModule({
 declarations: [ProductDetailsComponent,TitlebBarComponent,RatingComponent,ColorsComponent,SizeComponent],
 imports:[NgbCarouselModule,StoreModule.forRoot({}),MatIconModule,MatTabsModule,RouterTestingModule,NoopAnimationsModule],
 providers: [
 { provide: ActivatedRoute, useValue: { params: of(convertToParamMap({ id: '1' })) } },
 { provide: ShopService, useValue: mockShopService },
 { provide: Store, useValue: mockStore }
 ],
 
 });

fixture = TestBed.createComponent(ProductDetailsComponent);
component = fixture.componentInstance;
fixture.detectChanges();
 });

 it('should create', () => {
 expect(component).toBeTruthy();
 });

});
