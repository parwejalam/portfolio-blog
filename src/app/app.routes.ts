import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PortfoilioComponent } from './portfoilio/portfoilio.component';
import { PostComponent } from './blog/post/post.component';
import { SearchComponent } from './blog/search/search.component';

export const routes: Routes = [
    { path: '', component: PortfoilioComponent, pathMatch: 'full' },
    { path: 'portfolio', component: PortfoilioComponent },
    { path: 'blog', component: BlogComponent    },
    // child route for blog posts
    { path: 'blog/:slug', component: PostComponent }, // dynamic route for posts
    { path: 'blog/search', component: SearchComponent },
    { path: 'post', component: PostComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // wildcard route for 404
];
