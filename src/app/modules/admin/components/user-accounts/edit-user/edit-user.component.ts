import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../../../core/services/student.service';
import {InstructorService} from '../../../../../core/services/instructor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../../../../../core/models/student';
import {User} from '../../../../../core/models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {
  type: string;
  id: number;
  lastName = '';
  firstName = '';
  middleName = '';
  isUpdating = false;
  user: User;
  isDisabled = true;
  isResetting = false;

  constructor(private studentService: StudentService,
              private instructorService: InstructorService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        this.type = params.type;
        // tslint:disable-next-line:radix
        this.id = parseInt(params.id);
        this.loadUser();
        console.log(params);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
  }

  loadUser() {
    console.log('load user');
    switch (this.type) {
      case 'student':
        this.studentService.getStudent(this.id).subscribe((user: User) => {
          this.user = user;
          this.initialize();
        });
        break;
      case 'instructor':
        this.instructorService.getInstructor(this.id).subscribe((user: User) => {
          this.user = user;
          this.initialize();
        });
    }
  }

  initialize() {
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.middleName = this.user.middleName;
    console.log(this.user);
  }


  keyup() {
    this.isDisabled = !(this.firstName !== this.user.firstName ||
      this.lastName !== this.user.lastName ||
      this.middleName !== this.user.middleName);
  }

  update() {
    this.isUpdating = true;
    if (this.type === 'student') {
      this.studentService.update
    }
  }

  reset() {
      this.isResetting = true;
      if (this.type === 'student') {
        this.studentService.resetPassword(this.user.id).subscribe(res => {
          if (res) {
            alert('Password reset success!');
            this.isResetting = false;
          }
        });
      } else if (this.type === 'instructor') {
        this.instructorService.resetPassword(this.user.id).subscribe(res => {
          if (res) {
            alert('Password reset success!');
            this.isResetting = false;
          }
        });
      }
  }
}
