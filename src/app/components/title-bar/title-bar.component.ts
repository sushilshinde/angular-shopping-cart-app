import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitlebBarComponent {
  @Input() title;
  @Input() subTitle;
}
