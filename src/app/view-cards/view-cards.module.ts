import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewCardsPageRoutingModule } from './view-cards-routing.module';
import { ViewCardsPage } from './view-cards.page';
import { Heart, LucideAngularModule, Upload, User } from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCardsPageRoutingModule,
    LucideAngularModule.pick({ Heart,Upload, User })
  ],
  declarations: [ViewCardsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewCardsPageModule { }
