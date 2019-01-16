import { Component, OnInit, Input } from '@angular/core';
import { Constant } from 'src/app/core/constant';
import { Router, NavigationEnd } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'san-hiring-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  @Input() drawer: MatDrawer;
  @Input() media: boolean;

  options: any = [
    {
      icon: 'home',
      label: 'Inicio',
      active: false,
      route: [
        Constant.PATH_HOME
      ]
    },
    {
      icon: 'assignment_ind',
      label: 'Nueva solicitud',
      active: false,
      route: [
        Constant.PATH_REQUEST,
        Constant.PATH_NEW
      ]
    },
    {
      icon: 'settings',
      label: 'Administrar',
      active: false,
      route: [
        Constant.PATH_ADMIN
      ]
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        for (let o of this.options) {
          if (e.url.indexOf(o.route.join('/')) > -1) {
            o.active = true;
          } else {
            o.active = false;
          }
        }
      }
    });
  }

  navigate(option): void {
    if (this.media) {
      this.drawer.close();
    }

    this.router.navigate([Constant.PATH_VIEW].concat(option.route));
  }
}
