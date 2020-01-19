import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { LoginComponent } from '../login/login.component';
import { User } from 'src/app/shared/models/User';
import { Router } from '@angular/router';
import { Location, DOCUMENT } from '@angular/common';

import { UserService } from 'src/app/services/user.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [trigger('fade', [
    state('void', style({opacity: 0})),
    transition(':enter', [animate(100)]),
    transition(':leave', [animate(300)]),
  ])]
})
export class HeaderComponent implements OnInit {
  isConnected = false;
  isModalOpen = false;
  route: string;
  currentUser;
  currentUrl;
  navbar;
  user: User;


  constructor(location: Location, public matDialog: MatDialog, private userService: UserService, private router: Router, @Inject(DOCUMENT) document) {
    router.events.subscribe(val => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = 'Home';
      }
    });
  }

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

  // Scroll Navbar
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 20) {
      let navbar = document.getElementById('navbar');
      navbar.classList.add('sticky');
    } else {
      let navbar = document.getElementById('navbar');
      navbar.classList.remove('sticky');
    }
  }
}


