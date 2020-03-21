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
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
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
          console.log(data);
          //
          // switch (data) {
          //   case 'ROLE_STUDENT':
          //     this.router.navigate([this.returnUrl || 'student']);
          //     break;
          //   case 'ROLE_INSTRUCTOR':
          //     this.router.navigate([this.returnUrl || 'instructor']);
          //     break;
          //   case 'ROLE_ADMIN':
          //     this.router.navigate([this.returnUrl || 'admin']);
          //     break;
          //   default:
          //     this.router.navigate(['/']);

          // }
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
