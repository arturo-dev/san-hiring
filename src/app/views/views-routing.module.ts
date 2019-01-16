import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRequestComponent } from './new-request/new-request.component';
import { Constant } from '../core/constant';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
        path: `${Constant.PATH_HOME}`,
        component: HomeComponent
    },
    {
        path: `${Constant.PATH_REQUEST}/${Constant.PATH_NEW}`,
        component: NewRequestComponent
    },
    {
        path: `${Constant.PATH_ADMIN}`,
        component: AdminComponent
    },
    {
        path: '',
        redirectTo: `${Constant.PATH_HOME}`
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
