import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.scss']
})
export class FundingComponent implements OnInit {

  allUsers: User[];
  searchResult: User[] = [];

  constructor(private userService: UserService, private matDialog: MatDialog) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUser().subscribe((users: User[]) => {
      this.allUsers = users;
    });
  }

  getResults(users) {
    this.searchResult = users;
    console.log(this.searchResult);
  }

}
