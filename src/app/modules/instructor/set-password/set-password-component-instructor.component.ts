import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../core/services/student.service';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {Router} from '@angular/router';
import {Student} from '../../../core/models/student';
import {InstructorService} from '../../../core/services/instructor.service';
import {Instructor} from '../../../core/models/instructor';

@Component({
  selector: 'app-set-password-instructor',
  templateUrl: './set-password-component-instructor.component.html',
  styleUrls: ['./set-password.component.sass']
})
export class SetInstructorPasswordComponent implements OnInit {
  newPassword: string;
  confirmPassword: string;
  isDisabled = true;
  constructor(private instructorService: InstructorService, private authService: AuthenticationService, private router: Router) { }

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
    this.authService.currentUser.subscribe((inst: Instructor) => {
      this.instructorService.updatePassword(this.newPassword, inst.id).subscribe((instructor: Instructor) => {
        console.log(instructor);
        alert('Please log-in using your new password.');
        this.authService.logout();
        this.router.navigate(['/']);
      });
    });
  }
}
