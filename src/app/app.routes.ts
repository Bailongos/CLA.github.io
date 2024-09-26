import { Routes } from '@angular/router';
import {NDefaultComponent} from './public-Default/n-default/n-default.component';
import{LoginComponent} from './public-Default/login/login.component'

export const routes: Routes = [
  {  path: 'default', component: NDefaultComponent},
  {  path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/default', pathMatch: 'full'}
];
