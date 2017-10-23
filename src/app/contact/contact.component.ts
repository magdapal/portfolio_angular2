import { Component, OnInit, HostListener, Inject, ViewChild } from '@angular/core';
import { Validators, FormGroup,  FormControl} from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { NgZone } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public isDesktop: boolean;
  public isActive: boolean;
  
  

  @ViewChild('successModal')
  modalSuccess: ModalComponent;
    
  @ViewChild('errorModal')
  modalError: ModalComponent;
  
	public formSubmitAttempt: boolean;

  form = new FormGroup({
  	name: new FormControl('', [
  		Validators.required,
  		Validators.minLength(2)
    ]),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })

  get name() {
  	return this.form.get('name');
  }
  get email() {
  	return this.form.get('email');
  }
  get message() {
    return this.form.get('message');
  }

  constructor(@Inject(DOCUMENT) private document: Document, private http: Http) { 
  }
  
  ngOnInit() {
  }
    
	onSubmit() {
    this.formSubmitAttempt = true;
    if (this.form.valid) {
      let headers = new Headers({ 
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      let options = new RequestOptions({ headers: headers });
      let url = "https://formspree.io/magdalena.pal90@gmail.com";
      let data = `name=${this.name.value}&email=${this.email.value}&message=${this.message.value}`;

      this.http.post(url, data, options).subscribe(
        data => { this.modalSuccess.open(); },
        err => { this.modalError.open(); }
      );
    }
   }
};
