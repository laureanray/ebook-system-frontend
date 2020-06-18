import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {first} from 'rxjs/operators';
import {Admin} from '../../../core/models/admin';
import {Instructor} from '../../../core/models/instructor';
import {Response} from '../../../core/models/response';

@Component({
  selector: 'app-instructor-admin-login',
  templateUrl: './instructor-admin-login.component.html',
  styleUrls: ['./instructor-admin-login.component.sass']
})
export class InstructorAdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  submitted = false;
  usernameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  errors = [];
  invalidCredentials = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    console.log(this.authenticationService.currentUserValue);
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: this.usernameFormControl,
      password: this.passwordFormControl,
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl;
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log('on submit');
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    setTimeout(() => {
      this.authenticationService.instructorLogin(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          (data: Response) => {
            console.log(data);
            if (data !== null) {
              if (data.type === 'Instructor') {
                this.router.navigate([this.returnUrl || 'instructor']);
              } else {
                this.router.navigate([this.returnUrl || 'admin']);
              }
            }
          },
          error => {
            console.log(error);
            this.submitted = false;
            if (error) {
              this.invalidCredentials = true;
              alert('Invalid credentails');
              console.log('invalid');
            } else {
              alert('Failed connecting to server');
            }
            this.submitted = false;
          }
        );
    }, 1000);
  }

  getErrorMessage() {
    if (this.usernameFormControl.hasError('required') || this.passwordFormControl.hasError('required')) {
      return 'You must enter a value';
    }
  }
}
