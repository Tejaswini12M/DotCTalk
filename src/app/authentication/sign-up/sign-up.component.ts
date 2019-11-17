import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
  ) {
    this.signUpForm = this.formBuilder.group({
      'ctrlName': ['', Validators.required],
      'ctrlEmail': ['', Validators.required],
      'ctrlPassword': ['', Validators.required],
      'ctrlConfirmPassword': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  public signUpToApp() {
    const form = {
      email: this.signUpForm.controls['ctrlEmail'].value,
      password: this.signUpForm.controls['ctrlPassword'].value
    }
    this.authenticationService.signUpWithEmail(form);
  }

}
