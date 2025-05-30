import { Component } from '@angular/core';
import * as aos from 'aos';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {

  
  ngOnInit(): void {
    // You can initialize AOS here if needed
    aos.init({
      duration: 3000,
    });
  }

}
