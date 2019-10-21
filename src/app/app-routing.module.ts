import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'login', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule) },
  { path: 'board', loadChildren: () => import('./board/board.module').then(mod => mod.BoardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
