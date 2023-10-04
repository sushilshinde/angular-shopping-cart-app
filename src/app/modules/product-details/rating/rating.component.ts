// Import necessary Angular modules
import { Component, Input } from '@angular/core';

// Component decorator with selector, template, and styles
@Component({
  selector: 'app-rating', // Selector for the component
  templateUrl: './rating.component.html', // Template file path
  styleUrls: ['./rating.component.css'] // Styles file path
})
export class RatingComponent {
  @Input() rating; // Input property for the rating value

  totalStars = 5; // Total number of stars in the rating

  // The class does not have a constructor or additional methods because it mainly relies on Angular's input binding and template
}
