import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';
import { FavoritesPage } from './favorites.page';
import { FavoritesPageRoutingModule } from './favorites-routing.module';
import { ContentCardModule } from '../../shared/components/content-card/content-card.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FavoritesPageRoutingModule,
    ContentCardModule
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
