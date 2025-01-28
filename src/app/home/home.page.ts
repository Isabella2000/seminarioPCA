import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  posts: any[] = [];
  page: number = 1;
  limit: number = 10;
  hasMore: boolean = true;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    console.log('Home');
    this.loadPosts();

  }


  loadPosts(event?: any) {
    console.log('Load Posts');
    this.postService.getPosts(this.page, this.limit).then(
      (data: any) => {
        if (data.length > 0) {
          this.posts = [...this.posts, ...data];
          this.page++;
        } else {
          this.hasMore = false;
        }

        if (event) {
          event.target.complete();
        }
      },
      (error) => {
        console.log(error);
        if (event) {
          event.target.complete();
        }
      }
    )
  }
}
