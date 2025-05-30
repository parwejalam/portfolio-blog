import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  year = new Date().getFullYear();

  icons = [
    {
      name: 'facebook',
      href: 'https://www.linkedin.com/in/your-profile',
      icon: 'bi bi-facebook',
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/your-profile',
      icon: 'bi bi-instagram',
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/your-profile',
      icon: 'bi bi-linkedin',
    },
    {
      name: 'github',
      href: 'https://www.github.com/your-profile',
      icon: 'bi bi-github',
    },
    { 
      name: 'twitter',
      href: 'https://twitter.com/your-profile',
      icon: 'bi bi-twitter',
    }
  ];


}
