import { Component, Input } from '@angular/core';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  activeItem: string = 'Home';

  setActive(label: string) {
    this.activeItem = label;
  }

  isActive(label: string): boolean {
    return this.activeItem === label;
  }
}
