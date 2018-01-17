import { Component } from '@angular/core';

interface User{
  name: string,
  email: string,
  editing: boolean
}

@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.css']
})
export class FormEventsComponent{

  user: User = {
    name: '',
    email: '',
    editing: false
  };
  users: User[] = [
    {
      name: 'Alex',
      email: 'foo@example.com',
      editing: false
    },
    {
      name: 'Hool',
      email: 'voo@example.com',
      editing: false
    }
  ];

  constructor() { }

  onSubmit(form) {
    this.users.push({
      name: this.user.name,
      email: this.user.email,
      editing: false
    });
    form.resetForm();
  }

  removeUser(i) {
    this.users.splice(i, 1);
  }

  editMode(i) {
    this.users[i].editing = true;
  }

  saveEdits(i) {
    this.users[i].editing = false;
  }
}
