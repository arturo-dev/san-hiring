import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/constant';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'san-hiring-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {

  buttonsDisabled = false;

  constructor(
    private router: Router,
    private snack: MatSnackBar
  ) { }

  ngOnInit() { }

  submit(e): void {
    this.buttonsDisabled = true;
    setTimeout(() => {
      this.buttonsDisabled = false;
      this.snack.open('Petición procesada correctamente', '', {
        duration: 3500,
        verticalPosition: 'top'
      });
      this.router.navigate([
        Constant.PATH_VIEW,
        Constant.PATH_HOME
      ]);
    }, 1500);
    
    e.preventDefault();
  }

}
