import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCardsPage } from './view-cards.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCardsPageRoutingModule {}
