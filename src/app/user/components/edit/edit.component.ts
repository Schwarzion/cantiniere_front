import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  isQueried = false;
  user: User;
  resp: number;
  form: FormGroup;

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById().subscribe(resp => {
      this.resp = resp.status;
      this.user = resp.body;
      if (this.resp === 200) {
        this.initForm();
        this.isQueried = true;
      }
    });
  }

  edit() {
    this.userService.editUser(this.form.value, this.user.id).subscribe(resp => {
      this.user = resp.body;
    });
    this.router.navigate(['/user/profile']);
    //ADD ALERT : User sucessfully updated;
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      firstname: new FormControl(this.user.firstname, Validators.required),
      email: new FormControl(this.user.email, Validators.required),
      address: new FormControl(this.user.address, Validators.required),
      town: new FormControl(this.user.town, Validators.required),
      postalCode: new FormControl(this.user.postalCode, Validators.required),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(8)]),
      sex: new FormControl(this.user.sex, Validators.required),
      phone: new FormControl(this.user.phone, Validators.required),
      isLunchLady: new FormControl(this.user.isLunchLady),
    });
  }
}
