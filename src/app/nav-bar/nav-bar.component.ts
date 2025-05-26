import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {


    navLinks = [
    { label: 'Home', routerLink: 'portfolio' },
    { label: 'About', id: '#about' },
    { label: 'Career', id: '#career' },
    { label: 'Skills', id: '#skill' },
    { label: 'Blog', routerLink: 'blog' },
    { label: 'Contact Me!', id: '#contact' },
    ]
}
