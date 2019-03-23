import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '',    redirectTo: 'home',    pathMatch: 'full'  },
  { path: 'home', component: HomeComponent },
  { path: 'login',  loadChildren: './modules/authentication/authentication.module#AuthenticationModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

