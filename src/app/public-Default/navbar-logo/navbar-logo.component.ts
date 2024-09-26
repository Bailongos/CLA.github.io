import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-navbar-logo',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './navbar-logo.component.html',
  styleUrl: './navbar-logo.component.css'
})
export class NavbarLogoComponent {

}
