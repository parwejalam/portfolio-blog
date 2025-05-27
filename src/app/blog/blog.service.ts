import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { marked } from 'marked';
import matter from 'gray-matter';
import { map, forkJoin, Observable } from 'rxjs';

export interface BlogPost {
    title: string;
    slug: string;
    date: string;
    tags: string[];
    content: string;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
    constructor(private http: HttpClient) { }

    private postsList = [
        '2016-08-17-angular2-has-released.md',
        '2016-09-17-general-performance-consideration-csharp.md',
        '2016-09-17-string-comparision-csharp.md',
        '2016-09-24-string-manipulation.md',
        '2016-09-25-elasticsearch-installation-guide.md',
        '2016-09-25-search-strings-using-regular-expression.md',
        '2016-10-23-setup-angular-project-in-visual-studio.md',
        '2016-11-27-vs-code.md',
        '2016-12-18-Nasscom-Annual-Technology-Conference-2016.md',
        '2017-01-04-Getting-Started-with-Jekyll-Engine.md',
        '2017-01-07-Deploy-ElasticSearch-on-IIS.md',
        '2017-01-22-Using Implicit Converters.md',
        '2017-09-07-Caliburn-Micro.markdown',
        '2017-09-07-MahApp.Metro.markdown',
        '2017-10-06-Aurelia-Bootstrap-Startup.md',
        '2017-10-06-Aurelia-Breeze-Client-Startup.md',
        '2017-10-06-Aurelia-Breeze-Server-Startup.md',
        '2017-10-06-Aurelia-NetCore-Startup.md',
        '2017-10-06-Aurelia-Startup.md',
        '2017-10-06-Aurelia-Syncfusion-Startup.md',
        '2017-10-06-Visual Studio-Ensuring Intellisense.md',
        '2017-10-20-Vue-Getting-Started.markdown',
        '2017-11-13-Angular-i18n.markdown',
        '2017-11-13-Angular-To-Remember.markdown',
        '2017-11-13-Angular-UnitTest.markdown',
        '2017-11-13-Network-Programming.markdown',
        '2017-11-19-VSCode-debugging-chrome.markdown',
        '2017-12-06-Aurelia-View-LifeCycle.md'
    ];

    getAllPosts(): Observable<BlogPost[]> {
        const posts$ = this.postsList.map(filename =>
            this.http.get(`assets/posts/${filename}`, { responseType: 'text' }).pipe(
                map(raw => {
                    const { data, content } = matter(raw);
                    return {
                        ...data,
                        content: marked(content)
                    } as BlogPost;
                })
            )
        );

        return forkJoin(posts$);
    }

    getPostBySlug(slug: string): Observable<BlogPost | undefined> {
        return this.getAllPosts().pipe(
            map(posts => posts.find(post => post.slug === slug))
        );
    }

    searchPosts(query: string): Observable<BlogPost[]> {
        return this.getAllPosts().pipe(
            map(posts =>
                posts.filter(p =>
                    p.title.toLowerCase().includes(query.toLowerCase()) ||
                    p.content.toLowerCase().includes(query.toLowerCase()) ||
                    p.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
                )
            )
        );
    }
}
