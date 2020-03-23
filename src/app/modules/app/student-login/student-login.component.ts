import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.sass']
})
export class StudentLoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  error = '';
  submitted = false;
  errorMsg: string;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    console.log(this.authenticationService.currentUserValue);
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/student']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      studentNumber: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl;
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.studentLogin(this.f.studentNumber.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data !== null) {
            this.router.navigate([this.returnUrl || 'student']);
          }
        },
        error => {
          console.log(error);
          if (error.status === 400) {
            this.errorMsg = 'Invalid credentials';
          } else {
            this.errorMsg = 'Can\'t connect. Please try again.';
          }
        }
      );
  }
}
