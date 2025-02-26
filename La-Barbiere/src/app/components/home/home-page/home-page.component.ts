import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from '../content-list/content-list.component';
import { ReservationsService, Haircut } from '../../../services/reservations.service';
import { RankingCortesComponent } from '../ranking-cortes/ranking-cortes.component';
import { PromotionsComponent } from '../../promotions/promotions.component';
import { UserInfoComponent } from '../../user-info/user-info.component'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    CommonModule,
    ContentListComponent,
    RankingCortesComponent,
    PromotionsComponent,
    UserInfoComponent  // Importamos el componente de información de usuario
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  popularHaircuts: Haircut[] = [];
  allHaircuts: Haircut[] = [];
  showUserInfo: boolean = false; // Controla la visibilidad de la pestaña de información de usuario

  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.allHaircuts = this.reservationsService.getRandomHaircuts(6);
  }

  displayUserInfo(): void {
    this.showUserInfo = true;
  }

  hideUserInfo(): void {
    this.showUserInfo = false;
  }
}
