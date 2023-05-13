import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Seite1Component } from './components/seite1/seite1.component';
import { Seite2Component } from './components/seite2/seite2.component';
import { Seite3Component } from './components/seite3/seite3.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard],
  children: [
    {path: '', redirectTo: 'seite1', pathMatch: 'full'},
    {path: 'seite1', component: Seite1Component},
    {path: 'seite2', component: Seite2Component},
    {path: 'seite3', component: Seite3Component},
  ]},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
