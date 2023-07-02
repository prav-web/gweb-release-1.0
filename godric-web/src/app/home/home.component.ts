import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  gotoServices() {
    this._router.navigate(['/services']);
  }

  gotoSupport() {
    this._router.navigate(['/contact']);
  }

}
