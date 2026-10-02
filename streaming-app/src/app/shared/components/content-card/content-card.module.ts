import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular/lazy';
import { ContentCardComponent } from './content-card.component';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [ContentCardComponent],
  exports: [ContentCardComponent]
})
export class ContentCardModule {}
