import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/constant';

@Component({
  selector: 'san-hiring-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selection = new SelectionModel<any>(true, []);
  buttonsDisabled = false;
  displayedColumns: string[] = [
    //'selection', 
    'id',
    'description',
    'dateCreation',
    'area',
    'departamento',
    'propietario',
    'state', 
    'date', 
    'organizacion',
    'dg',
    'rrhh',
    'actions'
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource([
      {
        id: 1,
        description: 'Solicitud recurso 1 blah blah blah fjkdlfjkbdn bfbsdahj fbda fasdbjh bfdjlsba fbad',
        dateCreation: '19-oct',
        area: 'Desarrollo',
        departamento: 'COREBANKING',
        propietario: 'Director 1',
        state: 'PDTE. APROBAR',
        date: '19-oct'
      },
      {id: 2, date: '01-01-2019'},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
    ]); 
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  navigateDetail(el) {
    this.router.navigate([
      Constant.PATH_VIEW,
      Constant.PATH_REQUEST,
      el.id
    ]);
  }

  submit(e, filter: MatExpansionPanel): void {
    this.buttonsDisabled = true;
    setTimeout(() => {
      this.buttonsDisabled = false;
      filter.close();
    }, 1500);
    
    e.preventDefault();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
