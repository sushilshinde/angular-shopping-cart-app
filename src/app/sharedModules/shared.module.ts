import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    FormsModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    FormsModule,
    MatListModule
  ],
})
export class SharedModules {}
