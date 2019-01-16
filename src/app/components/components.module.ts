import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,

    // Material
    MatIconModule
  ],
  declarations: [
    DrawerComponent
  ],
  exports: [
    DrawerComponent
  ]
})
export class ComponentsModule { }
