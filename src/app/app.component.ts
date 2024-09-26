import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarLogoComponent} from "./public-Default/navbar-logo/navbar-logo.component";
import {NavbarBotonesComponent} from "./public-Default/navbar-Botones/navbar-botones/navbar-botones.component";
import {PieComponent} from "./public-Default/pie/pie.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarLogoComponent, NavbarBotonesComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoCLA';
}
