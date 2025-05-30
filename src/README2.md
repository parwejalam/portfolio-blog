# Steps to Add and Show Blogs

1. **Create Your Blog Post File**
   - Write your blog post in Markdown format.
   - Add front-matter (YAML) at the top with at least `title`, `date`, `tags`, and optionally `slug`.
   - Example:
     ```
     ---
     title: "My First Blog Post"
     date: "2025-05-27"
     tags: ["angular", "blog"]
     slug: "my-first-blog-post"
     ---
     Your blog content goes here...
     ```

2. **Save the Markdown File**
   - Save the file in the `src/assets/posts/` directory.
   - Use a unique filename, e.g., `2025-05-27-my-first-blog-post.md`.

3. **Add the Filename to Blog Service**
   - Open `src/app/blog/blog.service.ts`.
   - Add your new filename to the `postsList` array:
     ```typescript
     private postsList = [
       // ...existing posts
       '2025-05-27-my-first-blog-post.md'
     ];
     ```

4. **Serve or Build the Application**
   - Run `ng serve` to start the development server, or build the app for production.

5. **View Your Blog**
   - Go to the `/blog` route in your browser to see the list of all blog posts.
   - Click on a post to view its content (if routing is set up for individual posts).

6. **(Optional) Add Routing for Individual Posts**
   - Make sure your routes in `app.routes.ts` include a dynamic route for slugs:
     ```typescript
     { path: 'blog/:slug', component: BlogComponent }
     ```
   - This allows you to access individual posts via `/blog/your-slug`.

7. **(Optional) Update Navigation**
   - Update navigation links if you want to add direct links to new posts.

---

**Note:**  
- Make sure the `assets/posts/` folder and your markdown files are included in the Angular assets configuration in `angular.json`.
- The blog service will automatically fetch and render the new post as long as the filename is in the `postsList` array.
