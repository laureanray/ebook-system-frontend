import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../../core/services/student.service';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {Student} from '../../../../core/models/student';
import {Router} from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.sass']
})
export class SetPasswordComponent implements OnInit {
  newPassword: string;
  confirmPassword: string;
  isDisabled = true;
  constructor(private studentService: StudentService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  update($event) {
    if ($event.key === 'Enter') {
      this.changePassword();
    }
    this.isDisabled = !(this.confirmPassword === this.newPassword);
  }

  changePassword() {
    this.isDisabled = true;
    this.authService.currentUser.subscribe((s: Student) => {
      this.studentService.updatePassword(this.newPassword, s.id).subscribe((student: Student) => {
        console.log(student);
        alert('Please log-in using your new password.');
        this.authService.logout();
        this.router.navigate(['/']);
      });
    });
  }

}
