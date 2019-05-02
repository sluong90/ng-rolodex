import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  contacts: any[];

  formData: {
    name: string,
    address: string,
    mobile: string,
    work: string,
    home: string,
    email: string,
    instagram: string
  } = {
    name: '',
    address: '',
    mobile: '',
    work: '',
    home: '',
    email: '',
    instagram: ''
  };

  nameValid: boolean = false;
  emailValid: boolean = false;

  emailErrorMessage: string = 'initial';


  constructor(private backend: BackendService)  { }

  ngOnInit() {
    this.contacts = this.backend.contacts;
  }

  validateEmail() {
    if(!this.formData.email){
      this.emailErrorMessage = 'Email is Required';
    }
    else if (this.formData.email.length < 3) {
      this.emailErrorMessage = 'Email must be of length 3';
    }
    else if(!this.formData.email.includes('@')) {
      this.emailErrorMessage = 'Invalid Email format';
  }
  else { this.emailErrorMessage = ''; }

  }

  submit() {
    //will not allow users to submit message if there are error messages
    if(this.emailErrorMessage) { return; }
    this.contacts.push(this.formData);

    console.log('submitted', this.contacts);
}

clearData() {
  this.formData.name = '';
  this.formData.address = '';
  this.formData.mobile = '';
  this.formData.work = '';
  this.formData.home = '';
  this.formData.email = '';
  this.formData.instagram = '';
}

}