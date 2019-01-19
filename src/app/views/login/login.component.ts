import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/constant';

@Component({
  selector: 'san-hiring-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  login() {
    this.router.navigate([
      Constant.PATH_VIEW,
      Constant.PATH_HOME
    ]);
  }

}
