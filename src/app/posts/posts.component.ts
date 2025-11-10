
import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
// import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/users.service';
import { PostService } from '../services/posts.service';


// forkJoin
@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  combinedData: any[] = [];
  selectedPost: any = null;

  constructor(
    private postsservice: PostService,
    private userservive: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));

    forkJoin({
      posts: this.postsservice.getPosts(),
      users: this.userservive.getData(),
    }).subscribe({
      next: ({ posts, users }) => {
        if (userId) {
          // user’s posts
          const filteredPosts = posts.filter((post) => post.userId === userId);
          this.combinedData = filteredPosts.map((post) => {
            const user = users.find((u) => u.id === post.userId);
            return {
              id: post.id,
              title: post.title,
              body: post.body,
              userName: user ? user.name : 'No User',
            };
          });
        } else {
          // all posts 
          this.combinedData = posts.map((post) => {
            const user = users.find((u) => u.id === post.userId);
            return {
              id: post.id,
              title: post.title,
              body: post.body,
              userName: user ? user.name : 'No User',
            };
          });
        }
      },
      error: (error) => console.error('Error fetching data:', error),
    });

    
    
    
  }
  openDetails(post: any) {
    this.selectedPost = post;
  }
  closePopup() {
    this.selectedPost = null;
  }
}