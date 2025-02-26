import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HaircutFilterComponent } from '../../haircut-filter/haircut-filter.component'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, HaircutFilterComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showUserDropdown = false;
  showHaircutFilter = false;

  @Output() userInfoRequested = new EventEmitter<void>();

  toggleUserDropdown(): void {
    this.showUserDropdown = !this.showUserDropdown;
    // Si se abre el dropdown de usuario, cerramos el filtro
    if (this.showUserDropdown && this.showHaircutFilter) {
      this.showHaircutFilter = false;
    }
  }

  showUserInfo(): void {
    this.showUserDropdown = false;
    this.userInfoRequested.emit();
  }

  logout(): void {
    console.log('Cerrando sesión...');
    this.showUserDropdown = false;
  }

  toggleHaircutFilter(): void {
    this.showHaircutFilter = !this.showHaircutFilter;
    // Si se abre el filtro, cerramos el dropdown de usuario
    if (this.showHaircutFilter && this.showUserDropdown) {
      this.showUserDropdown = false;
    }
  }

  closeHaircutFilter(): void {
    this.showHaircutFilter = false;
  }
}
