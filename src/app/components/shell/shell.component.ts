import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/constant';

@Component({
  selector: 'san-hiring-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {
  
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private router: Router
  ) { }

  ngOnInit() {
    this.mobileQuery = this.media.matchMedia('(min-width: 720px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.router.navigate([
      Constant.PATH_LOGIN
    ]);
  }

}

