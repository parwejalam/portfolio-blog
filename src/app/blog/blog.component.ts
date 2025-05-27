import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostComponent } from "./post/post.component";
import { BlogPost, BlogService } from './blog.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {

  navLinks = [
    { label: 'HOME', routerLink: '/portfolio' },
    { label: 'Post', routerLink: 'blog/:slug' },
    { label: '#C', id: '#c' },
    { label: 'Elastic Search', id: '#elasticSearch' },
    { label: 'OTHERS', id: '#other' },
    { label: 'Search', icon: 'bi bi-search fs-4' }
  ]

  posts: BlogPost[] | undefined = [];
  safeContent: SafeHtml | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.blogService.getPostBySlug(slug).subscribe(post => {
      if (post) {
        this.posts?.push(post);
        this.safeContent = this.sanitizer.bypassSecurityTrustHtml(post.content);
      }
    });
  }
}
