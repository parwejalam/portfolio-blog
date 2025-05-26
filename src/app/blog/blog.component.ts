import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostComponent } from "./post/post.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule, PostComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  navLinks = [
    { label: 'HOME', routerLink: 'Home' },
    { label: '#C', id: '#c' },
    { label: 'Elastic Search', id: '#elasticSearch' },
    { label: 'OTHERS', id: '#other' }
  ]
}
