import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../../services/reservations.service';
import { QuickActionFormComponent } from '../quick-action-form/quick-action-form.component';
import { ServiceListComponent } from '../service-list/service-list.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { AvailabilityCalendarComponent } from '../availability-calendar/availability-calendar.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [
    QuickActionFormComponent,
    ServiceListComponent,
    NavbarComponent,
    FooterComponent,
    AvailabilityCalendarComponent,
    CommonModule, // Asegúrate de importar CommonModule
  ],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})
export class ReservaComponent implements OnInit {
  popularHaircuts: { name: string; reservations: number; rating: number }[] = [];

  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.fetchPopularHaircuts();
  }

  fetchPopularHaircuts(): void {
    this.popularHaircuts = this.reservationsService.getPopularHaircuts();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const appointment = {
      id: Date.now(), // Generar un ID único
      date: '2024-02-01', // Aquí deberás integrar la fecha seleccionada del calendario
      time: '10:00', // Aquí deberás integrar la hora seleccionada del calendario
      serviceId: 1, // Aquí deberás integrar el servicio seleccionado
      customerName: 'John Doe', // Esto puede venir de un formulario adicional
    };

    const success = this.reservationsService.bookAppointment(appointment);

    if (success) {
      alert('¡Reserva realizada con éxito!');
    } else {
      alert('La hora seleccionada no está disponible.');
    }
  }
}
