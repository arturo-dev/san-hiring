import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'san-hiring-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  buttonsDisabled = false;
  displayedColumns: string[] = ['id', 'state', 'date'];
  dataSource = [
    {id: 1, state: 'PDTE. ALGO'},
    {id: 2, date: '01-01-2019'},
    {id: 3},
    {id: 4}
  ]

  constructor() { }

  ngOnInit() { }

  submit(e, filter: MatExpansionPanel): void {
    this.buttonsDisabled = true;
    setTimeout(() => {
      this.buttonsDisabled = false;
      filter.close();
    }, 1500);
    
    e.preventDefault();
  }

}
