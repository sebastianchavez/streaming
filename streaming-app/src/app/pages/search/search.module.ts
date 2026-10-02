import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';
import { SearchPage } from './search.page';
import { SearchPageRoutingModule } from './search-routing.module';
import { ContentCardModule } from '../../shared/components/content-card/content-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ContentCardModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
