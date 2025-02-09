import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ModalController } from '@ionic/angular';
import { AddPostModalPage } from '../add-post-modal/add-post-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.page.html',
  styleUrls: ['./view-cards.page.scss'],
  standalone: false,
})
export class ViewCardsPage {
  posts: any[] = [];
  page: number = 1;
  limit: number = 10;
  hasMore: boolean = true;
  isLoading: boolean = false;

  constructor(
    private postService: PostService,
    private modalController: ModalController,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loadPosts();
  }

  goToPerfil() {
    this.router.navigate(['/menu/account']);
  }

  goToUsers() {
    this.router.navigate(['/menu/home/search-users']);
  }

  async addPost() {
    const modal = await this.modalController.create({
      component: AddPostModalPage,
      componentProps: {}
    });
    return await modal.present();
  }

  truncateText(text: string, maxLength: number): string {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }

  loadPosts(event?: any) {
    this.isLoading = true;

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
    this.isLoading = false;
  }
}
