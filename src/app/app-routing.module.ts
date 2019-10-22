import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {path: '', redirectTo: 'board', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule) },
  { path: 'board',
    loadChildren: () => import('./board/board.module').then(mod => mod.BoardModule),
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
