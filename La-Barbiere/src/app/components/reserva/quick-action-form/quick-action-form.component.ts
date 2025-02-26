import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReservationsService } from '../../../services/reservations.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quick-action-form',
  standalone: true,
  imports: [FormsModule, CommonModule, MatSnackBarModule],  
  templateUrl: './quick-action-form.component.html',
  styleUrls: ['./quick-action-form.component.css']
})
export class QuickActionFormComponent implements OnInit {
  reserva = {
    fecha: '',
    hora: '',
    numeroPersonas: 1
  };

  horasDisponibles: string[] = [];
  minDate: string = new Date().toISOString().split('T')[0];

  constructor(private reservationsService: ReservationsService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    setInterval(() => {
      this.mostrarRecordatorio();
    }, 30000); // Se ejecuta cada 30 segundos
  }

  cargarHorasDisponibles(): void {
    if (this.reserva.fecha) {
      this.horasDisponibles = this.reservationsService.getAvailableHours(this.reserva.fecha);
    }
  }

  onSubmit(): void {
    if (this.reserva.fecha && this.reserva.hora && this.reserva.numeroPersonas > 0) {
      this.snackBar.open(
        `✅ RESERVA CONFIRMADA 📅 FECHA: ${this.reserva.fecha} 🕒 HORA: ${this.reserva.hora} 👥 PERSONAS: ${this.reserva.numeroPersonas}`,
        'Cerrar',
        { duration: 7000, verticalPosition: 'top', panelClass: ['large-snackbar'] }
      );
      console.log('Reserva enviada:', this.reserva);
    } else {
      this.snackBar.open('❌ ERROR: POR FAVOR, COMPLETE TODOS LOS CAMPOS DE LA RESERVA.', 'Cerrar', { duration: 7000, verticalPosition: 'top', panelClass: ['large-snackbar'] });
    }
  }

  mostrarRecordatorio(): void {
    this.snackBar.open(`🔔   ✅ RESERVA CONFIRMADA 📅 FECHA: ${this.reserva.fecha} 🕒 HORA: ${this.reserva.hora} 👥 PERSONAS: ${this.reserva.numeroPersonas}`, 'Cerrar', {
      duration: 7000,
      verticalPosition: 'top',
      panelClass: ['large-snackbar']
    });
  }
}