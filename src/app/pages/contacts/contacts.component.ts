import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
 
  contacts: any = [];

  constructor(private backend: BackendService)  { }

  ngOnInit() {
    this.contacts = this.backend.contacts;
    this.backend.getContacts()
    .then((data) => {
      console.log(data);
      this.contacts = data;
    })
  }


}