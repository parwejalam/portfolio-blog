import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PortfoilioComponent } from './portfoilio/portfoilio.component';
import { PostComponent } from './blog/post/post.component';

export const routes: Routes = [
    { path: '', component: PortfoilioComponent, pathMatch: 'full' },
    { path: 'blog', component: BlogComponent,
        //  children: [
        //     {path: '', component: PostComponent}
        // ]
     },
    // child route for blog posts
    { path: 'blog/:slug', component: PostComponent }, // dynamic route for posts
    // { path: 'blog/search', component: BlogSearchComponent },
    { path: 'portfolio', component: PortfoilioComponent },
    { path: 'post', component: PostComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // wildcard route for 404
];
