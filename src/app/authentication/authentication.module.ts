import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from './authentication.service';
import { MaterialModule } from '../share/material.module';
import { ShareModule } from '../share/share.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const AuthenticationComponents = [LoginComponent, SignUpComponent];

const authenticationRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent }
]

@NgModule({
  declarations: [
    AuthenticationComponents
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authenticationRoutes),
    AngularFireAuthModule,
    MaterialModule,
    ShareModule,
  ],
  providers: [
    AngularFireAuth,
    AuthenticationService,
  ],
  exports: [
    AuthenticationComponents
  ]
})
export class AuthenticationModule { }
