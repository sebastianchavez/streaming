import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular/lazy';
import { ContentCarouselComponent } from './content-carousel.component';
import { ContentCardModule } from '../content-card/content-card.module';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule, ContentCardModule],
  declarations: [ContentCarouselComponent],
  exports: [ContentCarouselComponent]
})
export class ContentCarouselModule {}
