import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';
import { ContentDetailPage } from './content-detail.page';
import { ContentDetailPageRoutingModule } from './content-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentDetailPageRoutingModule
  ],
  declarations: [ContentDetailPage]
})
export class ContentDetailPageModule {}
