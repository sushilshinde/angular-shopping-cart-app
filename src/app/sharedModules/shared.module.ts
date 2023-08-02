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
import { TitlebBarComponent } from '../components/title-bar/title-bar.component';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [TitlebBarComponent],
  imports: [
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
    MatSelectModule
  ],
  exports: [
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
    TitlebBarComponent,
    RouterModule,
    MatSelectModule
  ],
})
export class SharedModules { }
