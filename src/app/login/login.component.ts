import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  formdata;
  isLogged:boolean = this.storage.get("userName");

  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private router: Router) { }

  ngOnInit() {
    console.log("logged as:" + this.storage.get("userName"));

    this.formdata = new FormGroup({
      userName: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(5)
      ])),
       pass: new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(.{8})")
       ]))
    });
  }

  onClickSubmit(data) {
    this.storage.set("userName", data.userName);
    this.router.navigate(['posts'], {});
    this.isLogged = true;
  }

  get userName() {
      return this.formdata.get('userName');
  }

  get pass() {
      return this.formdata.get('pass');
  }

  logOut() {
    this.storage.set("userName", null);
    this.isLogged = false;
    this.router.navigate([''], {});
  }

  goToPosts() {
    this.router.navigate(['posts'], {});
  }

}
