import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  form: FormGroup;
  constructor(private router:Router, private userService: UserService) {
  }

  ngOnInit() {
    this.initForm();
  }

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
        sex: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
      }
    );
  }

  submit() {
    this.userService.addUser(this.form.value).subscribe(resp => console.log(resp));
    this.router.navigate(['/']);
  }
}
