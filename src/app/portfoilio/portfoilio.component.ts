import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { SkillComponent } from "./skill/skill.component";
import { CareerComponent } from "./career/career.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-portfoilio',
  standalone: true,
  imports: [
    NavBarComponent,
    AboutComponent,
    ContactComponent,
    SkillComponent,
    CareerComponent,
    HomeComponent

  ],
  templateUrl: './portfoilio.component.html',
  styleUrl: './portfoilio.component.scss'
})
export class PortfoilioComponent {

}
