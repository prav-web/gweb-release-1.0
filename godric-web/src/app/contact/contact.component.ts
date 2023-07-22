import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/assets/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private _builder: FormBuilder,
    private _contactService: ContactService) { }

  ngOnInit(): void {
    this.contactForm = this._builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    })
  }

  sendQuery(data: any) {
    // alert(data);
    let mailText = "mailto:godricweb.in@gmail.com+?subject=" +data.name+ "&body=" + data.message;
    // let url = 'https://mail.google.com/mail/?to=godricweb.in@gmail.com&subject=' + data.name + 'body=' + data.message + '#compose';
    let url = 'https://mail.google.com/mail/?view=cm&to=godricweb.in@gmail.com&su=' + data.name + '&body=' + data.message;
    window.open(url, "_blank");
    // this._contactService.sendQuery(data).subscribe((res) => {
    //   alert('Query Sent Successfully')
    // });
  }


}
