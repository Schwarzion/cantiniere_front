import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private userService: UserService) { }
  form: FormGroup;
  submitted = false;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required)
    });
  }

  get f() { return this.form.controls; }

  forgotPassword() {
    this.submitted = true;
/*     if (this.form.valid) {
      this.userService.forgotPassword(this.form.value.email).subscribe();
    } */
  }
}
