import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
 socialIcons = [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/profile.php?id=100022510388187',
      icon: 'bi bi-facebook',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/parwejalam__/',
      icon: 'bi bi-instagram',
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/parwej-alam-3619412b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      icon: 'bi bi-linkedin',
    },
    {
      name: 'github',
      link: 'https://github.com/parwejalam',
      icon: 'bi bi-github',
    },
    {
      name: 'twitter',
      link: 'https://x.com/parwejalam__?t=r3FGjjqz-x9GzSXXdIOf_A&s=09 ',
      icon: 'bi bi-twitter',
    },
  ];


}
