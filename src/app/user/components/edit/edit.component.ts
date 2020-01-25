import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';
import { ValidatePassword } from '../../must-match/validate-password';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  submitted = false;
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

  get f() { return this.form.controls; }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      firstname: new FormControl(this.user.firstname, Validators.required),
      email: new FormControl(this.user.email, Validators.required),
      address: new FormControl(this.user.address, Validators.required),
      town: new FormControl(this.user.town, Validators.required),
      postalCode: new FormControl(this.user.postalCode, Validators.required),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(this.user.password, Validators.required),
      sex: new FormControl(this.user.sex, Validators.required),
      phone: new FormControl(this.user.phone, Validators.required),
      isLunchLady: new FormControl(this.user.isLunchLady)
    },
      ValidatePassword.MatchPassword
    );
  }

  edit() {
    console.log(this.form.controls);
    this.submitted = true;
    if (this.form.invalid) {
      console.log('nok');
      console.log(this.form);
    } else {
      this.userService.editUser(this.form.value, this.user.id).subscribe(resp => {
        this.user = resp.body;
      });
      this.router.navigate(['/user/profile']);
    }
  }
}
