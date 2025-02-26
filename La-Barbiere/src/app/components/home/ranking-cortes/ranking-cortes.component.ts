import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ranking-cortes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ranking-cortes.component.html',
  styleUrls: ['./ranking-cortes.component.css']
})
export class RankingCortesComponent {
  cortesDePelo = [
    { nombre: 'Fade Moderno', votos: 120 },
    { nombre: 'Corte Clásico', votos: 95 },
    { nombre: 'Pompadour', votos: 80 },
    { nombre: 'Buzz Cut', votos: 65 },
    { nombre: 'Mullet', votos: 50 }
  ];

  votar(index: number): void {
    this.cortesDePelo[index].votos += 1;
    this.ordenarRanking();
  }

  ordenarRanking(): void {
    this.cortesDePelo.sort((a, b) => b.votos - a.votos);
  }
}
