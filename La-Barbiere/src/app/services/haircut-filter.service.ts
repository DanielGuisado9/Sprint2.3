import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Haircut {
  id: number;
  name: string;
  style: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class HaircutService {
  // Datos mockeados ampliados de cortes de pelo
  private haircuts: Haircut[] = [
    { id: 1, name: 'Corte Clásico', style: 'Clásico', description: 'Un corte elegante y tradicional, perfecto para cualquier ocasión.', price: 15 },
    { id: 2, name: 'Corte Moderno', style: 'Moderno', description: 'Estilo actual con líneas definidas y un acabado pulido.', price: 20 },
    { id: 3, name: 'Corte Deportivo', style: 'Deportivo', description: 'Un corte fresco y práctico, ideal para deportistas.', price: 18 },
    { id: 4, name: 'Corte Undercut', style: 'Undercut', description: 'Estilo atrevido con laterales rapados y parte superior voluminosa.', price: 22 },
    { id: 5, name: 'Corte Desvanecido', style: 'Fade', description: 'Transición suave entre longitudes para un look moderno y limpio.', price: 19 },
    { id: 6, name: 'Corte Pompadour', style: 'Vintage', description: 'Corte clásico con volumen en la parte superior y laterales ajustados.', price: 25 },
    { id: 7, name: 'Corte Bob', style: 'Femenino', description: 'Un corte corto y elegante, ideal para un look moderno y chic.', price: 30 },
    { id: 8, name: 'Corte Pixie', style: 'Femenino', description: 'Corte corto, fresco y audaz para quienes buscan un estilo atrevido.', price: 28 },
    { id: 9, name: 'Corte de Barba', style: 'Barba', description: 'Cuidado y definición para la barba, con recortes precisos.', price: 12 },
    { id: 10, name: 'Corte a Capas', style: 'Capas', description: 'Corte versátil con capas que añaden volumen y movimiento.', price: 23 }
  ];

  getHaircuts(): Observable<Haircut[]> {
    return of(this.haircuts);
  }
}
