import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent implements OnInit {
  @Output() sendResult = new EventEmitter();
  @Input() users: User[];

  lastName = '';
  firstName = '';

  constructor() {}

  ngOnInit() {}

  validate() {
    this.sendResult.emit(this.searchUser());
  }

  searchUser() {
    return this.users.filter(
      user =>
        user.firstname.toLowerCase().includes(this.firstName.toLowerCase()) &&
        user.name.toLowerCase().includes(this.lastName.toLowerCase()),
    );
  }
}
