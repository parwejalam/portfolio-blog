import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, BlogPost } from '../blog.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.blogService.getPostBySlug(slug).subscribe(post => {
      if (post) {
        this.post = post;
        this.safeContent = this.sanitizer.bypassSecurityTrustHtml(post.content);
      }
    });
  }
}
