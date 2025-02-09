import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false
})
export class MenuPage implements OnInit {
  
  items: any = [
    {
      title: 'Perfil',
      url: '/menu/account',
      icon: 'person-outline'
    },
    {
      title: 'Usuarios',
      url: '/menu/home/search-users',
      icon: 'people-outline'
    }
  ]

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menu.close();
  }

  log_out() {
    this.storage.remove("user");
    this.storage.remove("isUserLoggedIn");
    this.navCtrl.navigateRoot("/login");
  }

}