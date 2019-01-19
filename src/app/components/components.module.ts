import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import { MatIconModule } from '@angular/material/icon';
import { ShellComponent } from './shell/shell.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    // Material
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    DrawerComponent,
    ShellComponent
  ],
  exports: [
    DrawerComponent,
    ShellComponent
  ]
})
export class ComponentsModule { }
