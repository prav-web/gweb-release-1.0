import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private _router:Router,
              private _builder:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this._builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    })
  }

  sendQuery(data: any) {
    let url = 'https://mail.google.com/mail/?view=cm&to=godricweb.in@gmail.com&su=' + data.name + '&body=' + data.message;
    window.open(url, "_blank");
  }

  onDesign() {
    alert('About Design - Page should be created')
  }

  onDevelopment() {
    alert('About Development - Page should be created')
  }

  onTraining() {
    alert('About Training - Courses form page should be created')
  }

}
