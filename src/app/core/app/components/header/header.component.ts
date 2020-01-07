import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isConnected = false;
  isModalOpen = false;
  currentUser;

  constructor(public matDialog: MatDialog, private userService: UserService) {}

  ngOnInit() {
    this.isUserConnected();
    this.getUser();
  }

  openLoginModal() {
    if (!this.isModalOpen) {
      this.isModalOpen = true;
      const dialogRef = this.matDialog.open(LoginComponent, { width: '250px'});
      dialogRef.afterClosed().subscribe(() => {
        this.isUserConnected();
        this.isModalOpen = false;
      });
    }
  }

  isUserConnected() {
    this.userService.isUserConnected().subscribe(isConnected => {
      this.isConnected = isConnected;
      this.getUser();
    });
  }

  logout() {
    this.userService.logout();
    this.isUserConnected();
  }

  getUser() {
    this.userService
    .getUser()
    .subscribe(cookie => this.currentUser = cookie.user);
  }

}
