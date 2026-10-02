import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ContentCarouselModule } from '../../shared/components/content-carousel/content-carousel.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    ContentCarouselModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
