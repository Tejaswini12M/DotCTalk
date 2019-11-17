import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public authenticationService: AuthenticationService,
  ) {
    this.loginForm = this.formBuilder.group({
      'ctrlEmail': ['', Validators.required],
      'ctrlPassword': ['', Validators.required],
    })
  }

  ngOnInit() { }

  public loginToApp() {
    const form = {
      email: this.loginForm.controls['ctrlEmail'].value,
      password: this.loginForm.controls['ctrlPassword'].value,
    }
    this.authenticationService.loginWithEmail(form);
    this.router.navigate(['/mail']);
  }

}
