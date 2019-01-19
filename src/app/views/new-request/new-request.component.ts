import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from './../../core/constant';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'san-hiring-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {

  buttonsDisabled = false;
  cols: number;

  form: FormGroup;
  peticionario = new FormControl();
  motivosolicitud = new FormControl();
  category = new FormControl();

  constructor(
    private router: Router,
    private snack: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({});
    this.form.addControl('peticionario', this.peticionario);
    this.form.addControl('motivosolicitud', this.motivosolicitud);
    this.form.addControl('category', this.category);
    this.cols = Math.floor(window.innerWidth / 300);
  }

  setCols(e) {
    this.cols = Math.floor(window.innerWidth / 300);
  }

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
