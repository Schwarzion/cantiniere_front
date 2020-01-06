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

  constructor(private router:Router, private userService:UserService) { }
  user: User;
  form: FormGroup;
  ngOnInit() {
    this.userService.getUser().subscribe(
      resp => 
      {
        this.user = resp.user; 
      });
      this.initForm();
    }
  
    initForm() {
      this.form= new FormGroup({
        name: new FormControl(this.user.name || '', Validators.required),
        firstname: new FormControl(this.user.firstname || '', Validators.required),
        email: new FormControl(this.user.email || '', Validators.required),
        address: new FormControl(this.user.address || '', Validators.required),
        town: new FormControl(this.user.town || '', Validators.required),
        postalCode: new FormControl(this.user.postalCode || '', Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        sex: new FormControl(this.user.sex || '', Validators.required),
        phone: new FormControl(this.user.phone || '', Validators.required),
      });
    }

  edit() {
    this.userService.editUser(this.form.value, this.user.id).subscribe(resp => console.log(resp));
    this.router.navigate(['/']);
  }
    
}
