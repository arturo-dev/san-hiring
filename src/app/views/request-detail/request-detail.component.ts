import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'san-hiring-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {

  cols: number;

  logs = [
    {
      user: 'John Doe',
      action: 'Crea',
      state: 'ACEPTADA',
      date: '01-01-2019 13:43'
    }
  ]

  constructor() { }

  ngOnInit() {
    this.cols = Math.floor(window.innerWidth / 300);
  }

  setCols(e) {
    this.cols = Math.floor(window.innerWidth / 300);
  }

}
