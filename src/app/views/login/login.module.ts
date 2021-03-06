import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,

    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
