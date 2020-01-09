import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss'],
})
export class UserResultComponent implements OnInit {
  @Input() user: User;

  isToggled = false;
  amount: number;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  toggleFunding() {
    this.isToggled = !this.isToggled;
  }

  addFunds() {
    if (window.confirm(`Vous êtes sur le point de créditer ${this.user.firstname} ${this.user.name} la somme de ${this.amount} €`)) {
      console.log('confirmed');
      this.userService.creditUser(this.user.id, this.amount).subscribe((res: User) => {
        this.user.wallet = res.wallet;
        this.isToggled = false;
      });
    }
  }
}
