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
    'interno',
    'comite',
    'actions'
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const data = [
      {
        id: 1,
        description: 'Solicitud recurso 1',
        dateCreation: new Date(),
        area: 'Desarrollo',
        departamento: 'COREBANKING',
        propietario: 'Director 1',
        state: 'RECHAZADA',
        date: new Date(),
        organizacion: 'OK',
        dg: 'KO'
      },
      {
        id: 2,
        description: 'Solicitud recurso 1',
        dateCreation: new Date(),
        area: 'Desarrollo',
        departamento: 'COREBANKING',
        propietario: 'Director 1',
        state: 'RECHAZADA',
        date: new Date(),
        organizacion: 'OK',
        dg: 'OK',
        interno: 'KO'
      },
      {
        id: 3,
        description: 'Solicitud recurso 1',
        dateCreation: new Date(),
        area: 'Desarrollo',
        departamento: 'COREBANKING',
        propietario: 'Director 1',
        state: 'RECHAZADA',
        date: new Date(),
        organizacion: 'OK',
        dg: 'OK',
        interno: 'OK',
        comite: 'KO'
      },
      {
        id: 4,
        description: 'Solicitud recurso 1',
        dateCreation: new Date(),
        area: 'Desarrollo',
        departamento: 'COREBANKING',
        propietario: 'Director 1',
        state: 'APROBADA',
        date: new Date(),
        organizacion: 'OK',
        dg: 'OK',
        interno: 'OK',
        comite: 'OK'
      },
      {
        id: 5,
        description: 'Solicitud recurso 1',
        dateCreation: new Date(),
        area: 'Desarrollo',
        departamento: 'COREBANKING',
        propietario: 'Director 1',
        state: 'PDTE. APROBAR',
        date: new Date(),
      }
    ];

    for (var i = 0; i < 100; i ++) {
      data.push({
        id: i + 6,
        description: 'Solicitud recurso ' + (i + 6),
        dateCreation: new Date(),
        area: 'Desarrollo',
        departamento: 'COREBANKING',
        propietario: 'Director 1',
        state: 'PDTE. APROBAR',
        date: new Date(),
      })
    }

    this.dataSource = new MatTableDataSource(data); 
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

  canSomeAprove(element) {
    if (element.organizacion === 'KO'
      || element.dg == 'KO'
      || element.interno == 'KO'
      || element.comite == 'KO'
      || element.comite == 'OK') {
        return false;
      }

      return true;
  }

  canSelectionAprove() {
    for (let elem of this.selection.selected) {
      if (!this.canSomeAprove(elem)) {
        return false;
      }
    }

    return true;
  }

}
