import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchUsersPageRoutingModule } from './search-users-routing.module';

import { SearchUsersPage } from './search-users.page';
import { LucideAngularModule, Search, User } from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchUsersPageRoutingModule,
    LucideAngularModule.pick({ User, Search })
  ],
  declarations: [SearchUsersPage]
})
export class SearchUsersPageModule { }