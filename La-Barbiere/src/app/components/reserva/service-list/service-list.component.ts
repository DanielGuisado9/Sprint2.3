import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-service-list',
  standalone: true, // Indica que es un standalone component
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent {
  services = [
    { name: 'Corte de pelo', description: 'Corte adaptado a tu estilo.', duration: '30 minutos' },
    { name: 'Tinte', description: 'Coloración profesional.', duration: '90 minutos' },
    { name: 'Perfilar barba', description: 'Diseño de barba perfecto.', duration: '20 minutos' }
  ];
}
