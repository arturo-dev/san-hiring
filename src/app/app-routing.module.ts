import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constant } from './core/constant';

const routes: Routes = [
  {
    path: Constant.PATH_VIEW,
    loadChildren: './views/views.module#ViewsModule'
  },
  {
      path: '',
      redirectTo: `${Constant.PATH_VIEW}`,
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
