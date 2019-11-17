import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public angularFireAuth: AngularFireAuth,
    public router: Router,
  ) { }

  public signUpWithEmail(form) {
    firebase.auth().createUserWithEmailAndPassword(form.email, form.password).then(response => {
      this.router.navigate(['/login'])
    }
    ).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
    });
  }

  public loginWithEmail(form) {
    console.log("loginInEmail", form);
    firebase.auth().signInWithEmailAndPassword(form.email, form.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
    });
  }

  public onAuthChanged() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("User signed in!", user);
      } else {
        console.log("User NOT signed in!");
      }
    });
  }

  public signOut() {
    firebase.auth().signOut().then(function() {
      console.log("Logged out!")
    }, function(error) {
      console.log(error.code);
      console.log(error.message);
    });
  }

}
