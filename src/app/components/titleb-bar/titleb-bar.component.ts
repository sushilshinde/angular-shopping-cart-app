import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titleb-bar',
  templateUrl: './titleb-bar.component.html',
  styleUrls: ['./titleb-bar.component.css']
})
export class TitlebBarComponent {
  @Input() title;
  @Input() subTitle;
}
