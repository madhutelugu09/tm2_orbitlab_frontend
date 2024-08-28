import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { BodyComponent } from "../body/body.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, BodyComponent, FooterComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
