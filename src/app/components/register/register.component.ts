import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs-compat/operator/switchMap';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/model/user.model';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnDestroy {
  subscriptions: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    //call Authservice
    this.subscriptions = this.authService
      .register(email, password)
      .subscribe((user: User) => {
        console.log(user);
        this.firebaseService.createUserData(user)
        this.router.navigate(['/login'])
      });
    form.reset();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
