import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Promotion {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  discount: number;
  validUntil: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  // Datos mockeados
  private promotions: Promotion[] = [
    {
      id: 2,
      title: "Promoción para Nuevos Clientes",
      description: "Si es tu primera cita, obtén un 20% de descuento.",
      imageUrl: "assets/images/Promocion1.jpg",
      discount: 20,
      validUntil: new Date("2025-12-31")
    }
    // Puedes agregar más promociones si lo deseas
  ];

  constructor() { }

  // Retorna los datos mockeados como un Observable
  getPromotions(): Observable<Promotion[]> {
    return of(this.promotions);
  }
}
