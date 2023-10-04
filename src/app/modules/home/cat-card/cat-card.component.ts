// Importing required modules from Angular core
import { Component, Input } from '@angular/core';

@Component({
  // Selector to use this component in templates
  selector: 'app-cat-card',
  // Template and style URLs for this component
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css'],
})
// Definition of CatCardComponent class
export class CatCardComponent {
  // Input property to receive data from parent component
  @Input() item; // Item representing category details
  @Input() ind;  // Index of the category in the loop
}
