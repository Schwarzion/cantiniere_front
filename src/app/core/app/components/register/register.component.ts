import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';
import { ValidatePassword } from 'src/app/user/must-match/validate-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  submitted = false;
  email = false;
  form: FormGroup;

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
    if (this.form.valid) {
      this.userService.addUser(this.form.value).subscribe(resp => {
        this.router.navigate(['/']);
      }, err => { if (err.status === 412) {
          this.email = true;
        }
      });
    }
  }

}
