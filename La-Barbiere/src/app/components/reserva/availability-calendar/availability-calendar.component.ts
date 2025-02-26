import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EncuestasComponent } from '../encuestas/encuestas.component'; // Importar EncuestasComponent


@Component({
  selector: 'app-availability-calendar',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    EncuestasComponent
  ],  
  templateUrl: './availability-calendar.component.html',
  styleUrls: ['./availability-calendar.component.css']
})
export class AvailabilityCalendarComponent implements OnInit {
  selectedDate: Date | null = null;
  selectedTime: string | null = null;
  minDate: string = new Date().toISOString().split('T')[0];
  encuestaVisible: boolean = false;

  // Lista de horas no disponibles
  unavailableHours: string[] = ['10:00', '11:30', '12:30', '16:00', '18:00', '19:00', '21:00'];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    setInterval(() => {
      this.mostrarRecordatorio();
    }, 30000); // Se ejecuta cada 30 segundos
  }

  get availableTimes(): string[] {
    if (!this.selectedDate) return [];
    return this.generateTimeSlots().filter(time => !this.unavailableHours.includes(time));
  }

  private generateTimeSlots(): string[] {
    return [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
      '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
    ];
  }

  selectTime(time: string): void {
    this.selectedTime = time;
  }

   onSubmit(event: Event): void {
    event.preventDefault();
    if (this.selectedDate && this.selectedTime) {
      this.snackBar.open(
        `✅ RESERVA CONFIRMADA 📅 FECHA: ${this.selectedDate.toLocaleDateString()} 🕒 HORA: ${this.selectedTime}`,
        'Cerrar',
        { duration: 3000, verticalPosition: 'top', panelClass: ['large-snackbar'] }
      );

      // Mostrar la encuesta inmediatamente al hacer clic en Reservar
      this.encuestaVisible = true;
    } else {
      this.snackBar.open('❌ ERROR: POR FAVOR, SELECCIONA UNA FECHA Y UNA HORA.', 'Cerrar', { duration: 3000, verticalPosition: 'top' });
    }
  }
  cerrarEncuesta(): void {
    this.encuestaVisible = false; // Cerrar la pestaña de encuestas al enviar
  }

  mostrarRecordatorio(): void {
    this.snackBar.open(`🔔   ✅ RESERVA CONFIRMADA: 📅 FECHA: ${this.selectedDate ? this.selectedDate.toLocaleDateString() : 'N/A'}`, 'Cerrar', {
      duration: 7000,
      verticalPosition: 'top',
      panelClass: ['large-snackbar']
    });
  }
}
