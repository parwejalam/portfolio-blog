import { Component } from '@angular/core';
import { BlogPost, BlogService } from '../blog.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ FormsModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  query = '';
  results: BlogPost[] = [];

  constructor(private blogService: BlogService) { }

  onSearch() {
    this.blogService.searchPosts(this.query).subscribe(res => this.results = res);
  }

}
