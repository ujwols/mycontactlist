import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from './contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private _http: Http) { }

  //get contacts

  getContacts() {
    console.log('Get Contacts Invoked..');
    return this._http.get('http://localhost:3000/api/contacts')
    .map(res => res.json());
  }

  //add contact
  addContact(newContact) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/api/contact', newContact, headers)
    .map(res => res.json());
  }
  //delete contact
  deleteContact(id) {
    return this._http.delete('http://localhost:3000/api/contact/' + id)
      .map(res => res.json());
  }

}
