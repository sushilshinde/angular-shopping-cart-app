import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
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
  ],
})
export class SharedModules {}
