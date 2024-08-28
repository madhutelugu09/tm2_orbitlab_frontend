import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss'
})
export class NavbarItemComponent {
  @Input() label!: string;
  @Input() inActiveIconSrc!: string;
  @Input() activeIconSrc!: string;
  @Input() isActive: boolean = false;

  onClick() {
    this.isActive = true;
  }

  get iconToDisplay(): string {
    return this.isActive ? this.activeIconSrc : this.inActiveIconSrc;
  }
}
