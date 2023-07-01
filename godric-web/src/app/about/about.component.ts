import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public t: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  team() {
    console.log('clicked');
    this.t = !this.t;
  }

}
