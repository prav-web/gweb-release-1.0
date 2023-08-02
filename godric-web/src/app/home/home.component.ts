import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDesign = true;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  gotoServices() {
    // this._router.navigate(['/services']);
  }

  // gotoDesign() {
  //   let designContent = document.getElementById('design') as HTMLBodyElement;
  //   designContent.innerHTML = 'Praveen';
  // }

  gotoSupport() {
    this.isDesign = !this.isDesign;
    this._router.navigate(['/contact']);
  }

}
