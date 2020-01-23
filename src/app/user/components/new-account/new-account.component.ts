import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';
import { ValidatePassword } from '../../must-match/validate-password';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  submitted = false;
  form: FormGroup;
  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.initForm();
  }

  get f() { return this.form.controls; }

  initForm() {
    this.form = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        firstname: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        town: new FormControl('', Validators.required),
        postalCode: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('', Validators.required),
        sex: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
      },
      ValidatePassword.MatchPassword
    );
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      console.log(this.form);
      console.log('nok');
    } else {
      this.userService.addUser(this.form.value).subscribe(resp => console.log(resp));
      this.router.navigate(['/']);
    }
  }
}
