import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-card',
  standalone: true,
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
  imports: [RouterModule],
})
export class ContentCardComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() image!: string;
}
