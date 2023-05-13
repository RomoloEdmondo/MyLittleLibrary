import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  loginForm: any;
  ngOnInit(): void {}



  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private firebaseService: FirebaseService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    //call Authservice
    this.authService.login(email, password).subscribe(async (data: any)=> {
      console.log(data)

      const user = await this.firebaseService.getUserData(data as User);

      const expirationDate = new Date(new Date().getTime() + data.expiresIn *1000)
      this.authService.createUser(data.email, data.localId, data.idToken, expirationDate, user?.['favorite'])
      // localStorage.setItem('user', JSON.stringify(this.authService.user))

      console.log(this.authService.user)
      this.router.navigate(['']);
    })
    form.reset()
  }
  }

