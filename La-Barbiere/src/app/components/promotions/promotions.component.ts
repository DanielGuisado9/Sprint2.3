import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PromotionsService, Promotion } from '../../services/promotions.service';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  promotions: Promotion[] = [];

  constructor(
    private promotionsService: PromotionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.promotionsService.getPromotions().subscribe((data) => {
      this.promotions = data;
    });
  }

  goToReservations(): void {
    this.router.navigate(['/reserva-promocion']); // O ajusta la ruta a '/reserva-promocion' según cómo la hayas configurado
  }
}
