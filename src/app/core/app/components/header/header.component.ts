import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isConnected = false;
  isModalOpen = false;
  currentUser;
  currentUrl;

  constructor(public matDialog: MatDialog, private userService: UserService, private router: Router) { 
  }

  user: User;
  ngOnInit() {
    this.isUserConnected();
    this.currentUrl = this.router.url;
  }

  openLoginModal() {
    if (!this.isModalOpen) {
      this.isModalOpen = true;
      const dialogRef = this.matDialog.open(LoginComponent, { width: '250px' });
      dialogRef.afterClosed().subscribe(() => {
        this.isUserConnected();
        this.isModalOpen = false;
      });
    }
  }

  isUserConnected() {
    this.userService.isUserConnected().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected === true) {
        this.getUser();
      } else {
        this.isConnected = false;
      }
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  getUser() {
    this.userService.getUserById().subscribe(
      resp => {
        this.user = resp.body;
        if (resp.status === 200) {
          this.isConnected = true;
        }
      });
  }
  refresh(): void {
    window.location.reload();
  }
}
