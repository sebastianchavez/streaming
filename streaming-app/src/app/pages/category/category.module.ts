import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';
import { CategoryPage } from './category.page';
import { CategoryPageRoutingModule } from './category-routing.module';
import { ContentCardModule } from '../../shared/components/content-card/content-card.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CategoryPageRoutingModule,
    ContentCardModule
  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
