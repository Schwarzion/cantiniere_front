import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  id;
  user: User;
  number;
  isToggled = false;
  amount: number;

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.pipe(switchMap(url => url)).subscribe(
      map => this.id = map.path
    );
    this.userService.getUserProfile(this.id).subscribe(
      resp => {
        this.user = resp.body;
      });
  }

  toggleFunding() {
    this.isToggled = !this.isToggled;
  }

  addFunds() {
    if (window.confirm(`Vous êtes sur le point de créditer ${this.user.firstname} ${this.user.name} la somme de ${this.amount} €`)) {
      this.userService.creditUser(this.user.id, this.amount).subscribe((res: User) => {
        this.user.wallet = res.wallet;
        this.isToggled = false;
      });
    }
  }

  editStatus() {
    if (this.user.status === 1) {
      if (window.confirm(`Vous êtes sur le point d'activer ${this.user.firstname} ${this.user.name}`)) {
        this.userService.activateUser(this.user.id).subscribe((res: User) => {
          this.user.status = res.status;
        });
      }
    } else if (this.user.status === 0) {
      if (window.confirm(`Vous êtes sur le point de désactiver ${this.user.firstname} ${this.user.name}`)) {
        this.userService.deactivateUser(this.user.id).subscribe((res: User) => {
          this.user.status = res.status;
        });
      }
    } else if (this.user.status === 2) {
      if (window.confirm(`Vous êtes sur le point de réactiver le compte de ${this.user.firstname} ${this.user.name} 
      qui avait été préalablement supprimé`)) {
        this.userService.activateUser(this.user.id).subscribe((res: User) => {
          this.user.status = res.status;
        });
      }
    }
  }

  orderHistory() {
    const id = this.user.id;
    this.router.navigate([`/cantiniere/userhistory`, id]);
  }

  deleteUser() {
    if (window.confirm(`Vous êtes sur le point de supprimer le compte de ${this.user.firstname} ${this.user.name}`)) {
      this.userService.deleteUser(this.user.id).subscribe((res: User) => {
        this.user.deleted = true;
      });
      this.router.navigate([`/cantiniere/manage`]);
    }
  }

  goToProfile() {
    const id = this.user.id;
    this.router.navigate([`/cantiniere/userprofile`, id]);
  }
}
