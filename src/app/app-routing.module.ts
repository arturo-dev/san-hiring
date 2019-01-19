import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constant } from './core/constant';
import { ShellComponent } from './components/shell/shell.component';

const routes: Routes = [
  {
    path: Constant.PATH_VIEW,
    component: ShellComponent,
    loadChildren: './views/views.module#ViewsModule'
  },
  {
    path: Constant.PATH_LOGIN,
    loadChildren: './views/login/login.module#LoginModule'
  },
  {
      path: '',
      redirectTo: `${Constant.PATH_LOGIN}`,
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
