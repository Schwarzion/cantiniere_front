import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { User } from 'src/app/shared/models/User';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isConnected = false;
  isModalOpen = false;
  route: string;
  currentUser;
  currentUrl;

  constructor(location: Location, public matDialog: MatDialog, private userService: UserService, private router: Router) {
    router.events.subscribe(val => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = 'Home';
      }
    });
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
    this.redirect();
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

  redirect() {
    if (this.route !== 'Home') {
      this.router.navigate(['/']);
    } else {
      this.refresh();
    }
  }

  refresh(): void {
    window.location.reload();
  }
}
