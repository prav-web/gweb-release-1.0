import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  send(): void {
    const { name, email, message } = this.form.value;
    // alert(`Name: ${name}, Email: ${email}, Message: ${message} `);
  }

    form = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      message: this.formBuilder.control(null),
    });

}
