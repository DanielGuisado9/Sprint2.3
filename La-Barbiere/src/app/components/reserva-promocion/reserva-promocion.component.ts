import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reserva-promocion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva-promocion.component.html',
  styleUrls: ['./reserva-promocion.component.css']
})
export class ReservaPromocionComponent {
  // Propiedades para almacenar los datos del formulario
  nombre: string = '';
  telefono: string = '';
  correo: string = '';

  // Mensaje de confirmación y mensaje de error general
  confirmationMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private location: Location) {}

  onReserve(form: NgForm): void {
    if (form.invalid) {
      this.errorMessage = 'Debe rellenar todos los campos correctamente.';
      this.confirmationMessage = null;
      return;
    }
    // Si el formulario es válido, se limpia el mensaje de error y se muestra el de confirmación
    this.errorMessage = null;
    this.confirmationMessage = `🔔 ✅ RESERVA CONFIRMADA para ${this.nombre}: 📅 FECHA: 25/2/2025 - Teléfono: ${this.telefono} - Correo: ${this.correo} - Promoción: Sí`;
  }

  goBack(): void {
    this.location.back();
  }
}
