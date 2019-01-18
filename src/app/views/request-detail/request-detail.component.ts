import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'san-hiring-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {

  logs = [
    {
      user: 'Pepito',
      action: 'Aprueba',
      state: 'ACEPTADA',
      date: '01-01-2019 13:43'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
