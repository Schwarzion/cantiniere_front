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

  // toggleFunding() {
  //   this.isToggled = !this.isToggled;
  // }

  // addFunds() {
  //   if (window.confirm(`Vous êtes sur le point de créditer ${this.user.firstname} ${this.user.name} la somme de ${this.amount} €`)) {
  //     console.log('confirmer');
  //     this.userService.creditUser(this.user.id, this.amount).subscribe((res: User) => {
  //       this.user.wallet = res.wallet;
  //       this.isToggled = false;
  //     });
  //   }
  // }

  // editStatus() {
  //   if (this.user.status === 1) {
  //     console.log('Activate');
  //     if (window.confirm(`Vous êtes sur le point d'activer ${this.user.firstname} ${this.user.name}`)) {
  //       console.log('confirmer');
  //       this.userService.activateUser(this.user.id).subscribe((res: User) => {
  //         this.user.status = res.status;
  //       });
  //     }
  //   } else if (this.user.status === 0) {
  //     console.log('Deactivate');
  //     if (window.confirm(`Vous êtes sur le point de désactiver ${this.user.firstname} ${this.user.name}`)) {
  //       console.log('confirmer');
  //       this.userService.deactivateUser(this.user.id).subscribe((res: User) => {
  //         this.user.status = res.status;
  //       });
  //     }
  //   }
  // }

  // orderHistory() {
  //   const id = this.user.id;
  //   this.router.navigate([`/cantiniere/userhistory`, id]);
  // }

  // deleteUser() {
  //   if (window.confirm(`Vous êtes sur le point de supprimer le compte de ${this.user.firstname} ${this.user.name}`)) {
  //     console.log('confirmer');
  //     this.userService.deleteUser(this.user.id).subscribe((res: User) => {
  //       this.user.deleted = true;
  //     });
  //   }
  // }

  goToProfile() {
    const id = this.user.id;
    this.router.navigate([`/cantiniere/userprofile`, id]);
  }
}
