import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogPost, BlogService } from './blog.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as aos from 'aos';

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
    // { label: 'Post', routerLink: 'blog/:slug' },
    { label: 'Angular', function: 'this.angular()' },
    { label: '#C', function: 'this.cSharp()' },
    { label: 'Elastic Search', function: 'this.elasticSearch()' },
    { label: 'OTHERS', function: 'this.others()' },
    { label: 'Search', icon: 'bi bi-search fs-4' }
  ]

  posts: BlogPost[] | undefined = [];
  CSharpPosts: BlogPost[] | undefined = [];
  AngularPosts: BlogPost[] | undefined = [];
  OtherPosts: BlogPost[] | undefined = [];
  elasticSearchPosts: BlogPost[] | undefined = [];
  safeContent: SafeHtml | undefined;

  blogContent: string = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    //for animation
    aos.init({
      duration: 2000,
    });

    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.blogService.getPostBySlug(slug).subscribe(post => {
        if (post) {
          this.posts = [post];
          console.log(post.tags);
          this.CSharpPosts = post.tags.includes('csharp') ? [post] : [];
          this.elasticSearchPosts = post.tags.includes('elasticsearch') ? [post] : [];
          this.OtherPosts = post.tags.includes('others') ? [post] : [];
          this.AngularPosts = post.tags.includes('angular') ? [post] : [];
          this.safeContent = this.sanitizer.bypassSecurityTrustHtml(post.content);
        }
      });
    } else {
      this.blogService.getAllPosts().subscribe(posts => {
        this.posts = posts;
        this.CSharpPosts = this.posts.filter(post => post.tags.includes('csharp'));
        console.log('C# Posts:', this.CSharpPosts);
        this.elasticSearchPosts = this.posts.filter(post => post.tags.includes('elasticsearch'));
        console.log('Elastic Search Posts:', this.elasticSearchPosts);
        this.OtherPosts = this.posts.filter(post => post.tags.includes('others'));
        console.log('Other Posts:', this.OtherPosts);
        this.AngularPosts = this.posts.filter(post => post.tags.includes('angular'));
        console.log('Angular Posts:', this.AngularPosts);
      });
    }

    if (this.posts && this.posts.length > 0) {
      this.CSharpPosts = this.posts.filter(post => post.tags.includes('csharp'));
      console.log('C# Posts:', this.CSharpPosts);
    } else {
      console.warn('No posts found or posts array is empty.');
    }

  }


// Handle click events for navigation links
  handleClick(label: string) {
    switch (label) {
      case 'Angular':
        this.angular();
        break;
      case '#C':
        this.cSharp();
        break;
      case 'Elastic Search':
        this.elasticSearch();
        break;
      case 'OTHERS':
        this.others();
        break;
      default:
        console.warn(`No action defined for label: ${label}`);
    }
  }

  // Navigation functions
  cSharp() {
    this.blogContent = 'csharp';
  }
  angular() {
    this.blogContent = 'angular';
  }
  elasticSearch() {
    this.blogContent = 'elasticsearch';
  }
  others() {
    this.blogContent = 'others';
  }


}

