import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { ModalController, NavController } from '@ionic/angular';
import { AddPostModalPage } from '../add-post-modal/add-post-modal.page';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
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
  isLoading: boolean = false;
  constructor(
    private postService: PostService,
    private modalController: ModalController,
    private router: Router,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
    ('Init Home');
    this.loadPosts();
    this.postService.postCreated.subscribe((newPost: any) => {
      this.posts.unshift(newPost);
    })
  }

  goToViewCards() {
    this.router.navigate(['/menu/view-cards']);
  }

  goToPerfil() {
    this.router.navigate(['/menu/account']);
  }

  goToUsers() {
    this.router.navigate(['/menu/home/search-users']);
  }

  log_out() {
    this.storage.remove("user");
    this.storage.remove("isUserLoggedIn");
    this.navCtrl.navigateRoot("/login");
  }

  async addPost() {
    const modal = await this.modalController.create({
      component: AddPostModalPage,
      componentProps: {}
    });
    return await modal.present();
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
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      },
      (error) => {
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      }
    )
  }

}
