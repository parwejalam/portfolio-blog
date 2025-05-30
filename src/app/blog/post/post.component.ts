import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService, BlogPost } from '../blog.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as aos from 'aos';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent  implements OnInit {
  post: BlogPost | undefined;
  safeContent: SafeHtml | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    aos.init({
      duration: 3000,
    });
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.blogService.getPostBySlug(slug).subscribe(post => {
      if (post) {
        this.post = post;
        this.safeContent = this.sanitizer.bypassSecurityTrustHtml(post.content);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }
}
