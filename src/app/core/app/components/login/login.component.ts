import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hasLoginFailed = false;

  constructor(public loginDialog: MatDialogRef<LoginComponent>, private loginService: LoginService, private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  sendLogin() {
    this.hasLoginFailed = false;
    this.loginService.login(this.loginForm.value).subscribe(res => {
      if (res.status === 200) {
        const token = res.headers.get('authorization').replace('Bearer ', '');
        this.userService.setUserToken(token);
        this.loginDialog.close();
      }
    }, err => {
      console.dir(err);
      this.hasLoginFailed = true;
    });
  }

}
