// Importing required modules from Angular core
import { Component, Input } from '@angular/core';

@Component({
  // Component metadata, specifying the selector, template file, and style file
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitlebBarComponent {
  // Input properties to receive pageTitle and subTitle from parent components
  @Input() pageTitle: string;
  @Input() subTitle: string;
}
