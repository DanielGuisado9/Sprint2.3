import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';
import { ReservationsService, Haircut } from '../../../services/reservations.service';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  haircuts: Haircut[] = [];

  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    // Obtiene 6 tarjetas de forma aleatoria
    this.haircuts = this.reservationsService.getRandomHaircuts(8);
  }
}
