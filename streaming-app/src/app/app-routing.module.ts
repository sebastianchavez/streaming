import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'content-detail/:id',
    loadChildren: () => import('./pages/content-detail/content-detail.module').then(m => m.ContentDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'player/:id',
    loadChildren: () => import('./pages/player/player.module').then(m => m.PlayerPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'category/:genre',
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
