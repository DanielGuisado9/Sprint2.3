import { Injectable } from '@angular/core';

export interface Haircut {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Appointment {
  id: number;
  date: string; // Formato: YYYY-MM-DD
  time: string; // Formato: HH:mm
  serviceId: number;
  customerName: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private haircuts: Haircut[] = [
    { id: 1, name: 'Corte clásico', description: 'Un corte tradicional.', price: 15, image: 'https://i.pinimg.com/564x/c9/26/f3/c926f302bc02d07a06466c8ce40b33f9.jpg' },
    { id: 2, name: 'Fade moderno', description: 'Corte degradado moderno.', price: 20, image: 'https://tahecosmetics.com/trends/wp-content/uploads/2023/02/corte-fade-flequillo-largo.jpg' },
    { id: 3, name: 'Rapado completo', description: 'Corte práctico y rápido.', price: 10, image: 'https://d2yoo3qu6vrk5d.cloudfront.net/images/20230712171352/imagen_2023-07-12_161402330.jpeg' },
    { id: 4, name: 'Corte texturizado', description: 'Con textura y movimiento.', price: 18, image: 'https://i.ytimg.com/vi/QgMdOozeGz4/maxresdefault.jpg' },
  ];

  private appointments: Appointment[] = [];
  private availableHours = {
    morning: ['09:00','09:30', '10:00','10:30', '11:00','11:30', '12:00','12:30', '13:00','13:30', '14:00'],
    afternoon: ['16:00', '16:30', '17:00','17:30', '18:00','18:30', '19:00','19:30', '20:00','20:30','21:00'],
  };

  constructor() {}

  getRandomHaircuts(count: number): Haircut[] {
    const shuffled = [...this.haircuts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  getAvailableHours(date: string): string[] {
    return [...this.availableHours.morning, ...this.availableHours.afternoon];
  }

  bookAppointment(appointment: Appointment): boolean {
    // Verifica si la hora está disponible
    const isAvailable = this.appointments.every(
      (a) => !(a.date === appointment.date && a.time === appointment.time)
    );

    if (isAvailable) {
      this.appointments.push(appointment);
      console.log('Cita reservada con éxito:', appointment);
      return true;
    } else {
      console.error('Hora no disponible:', appointment);
      return false;
    }
  }

  getAppointments(): Appointment[] {
    return this.appointments;
  }

  getPopularHaircuts() {
    return [
      { name: 'Corte Clásico', reservations: 120, rating: 4.5 },
      { name: 'Corte Moderno', reservations: 95, rating: 4.7 },
      { name: 'Corte de Barba', reservations: 80, rating: 4.6 },
    ];
  }
  
}
