import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HaircutService, Haircut } from '../../services/haircut-filter.service'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-haircut-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './haircut-filter.component.html',
  styleUrls: ['./haircut-filter.component.css']
})
export class HaircutFilterComponent implements OnInit {
  searchTerm: string = '';
  styleFilter: string = '';
  haircuts: Haircut[] = [];

  constructor(private haircutService: HaircutService, private router: Router) {}

  ngOnInit(): void {
    // Nos suscribimos al servicio para obtener los datos mockeados
    this.haircutService.getHaircuts().subscribe(data => {
      this.haircuts = data;
    });
  }

  get filteredHaircuts(): Haircut[] {
    return this.haircuts.filter(h => {
      const matchesSearch = this.searchTerm
        ? (h.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
           h.description.toLowerCase().includes(this.searchTerm.toLowerCase()))
        : true;
      const matchesStyle = this.styleFilter
        ? h.style.toLowerCase() === this.styleFilter.toLowerCase()
        : true;
      return matchesSearch && matchesStyle;
    });
  }

  goToReservation(): void {
    this.router.navigate(['/reserva']);
  }
}
