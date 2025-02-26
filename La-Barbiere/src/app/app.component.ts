import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: '<app-content-card></app-content-card>'
})
export class AppComponent {
  title = 'La-Barbiere';
}
