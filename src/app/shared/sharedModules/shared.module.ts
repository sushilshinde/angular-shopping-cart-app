import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTreeModule } from '@angular/material/tree';
import { CommonModule } from '@angular/common';
import { TitlebBarComponent } from '../../components/title-bar/title-bar.component';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { HighlightDirective } from '../custom-directives/hover.directive';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TotalPipe } from '../custom-pipes/total.pipe';
import { CustomCurrencyPipe } from 'src/app/components/custom-pipe/custom-currency.pipe';
import { HttpClientModule } from '@angular/common/http';

const sharedImports = [
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatMenuModule,
  FormsModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatCardModule,
  NgbCarouselModule,
  MatTreeModule,
  NgbModule,
  CommonModule,
  RouterModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatTabsModule,
  CarouselModule,
  HttpClientModule,
]

@NgModule({
  declarations: [TitlebBarComponent, ProductCardComponent, HighlightDirective,CustomCurrencyPipe,TotalPipe],
  imports: sharedImports,
  exports: [
    ...sharedImports, TitlebBarComponent, ProductCardComponent, HighlightDirective,CustomCurrencyPipe,TotalPipe
  ],
})
export class SharedModules { }
