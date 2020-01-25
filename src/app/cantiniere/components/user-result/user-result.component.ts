import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss'],
})
export class UserResultComponent implements OnInit {
  @Input() user: User;

  isToggled = false;
  amount: number;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() { }

  goToProfile() {
    const id = this.user.id;
    this.router.navigate([`/cantiniere/userprofile`, id]);
  }
}
