import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-encuestas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent {
  @Input() visible: boolean = false; // Control de visibilidad
  @Output() cerrarEncuesta = new EventEmitter<void>(); // Evento para cerrar la encuesta

  rating: number = 0;
  comment: string = '';

  submitSurvey(): void {
    console.log('Encuesta enviada:', { rating: this.rating, comment: this.comment });
    alert('¡Gracias por tu valoración!');

    this.cerrarEncuesta.emit(); // Emitir el evento para cerrar la encuesta
  }
}
