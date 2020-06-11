import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Instructor} from '../../../../../core/models/instructor';
import {InstructorService} from '../../../../../core/services/instructor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.sass']
})
export class AddInstructorComponent implements OnInit {
  public form: FormGroup;
  isSaving = false;

  constructor(private formBuilder: FormBuilder, private instructorService: InstructorService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      employeeNumber: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      honorifics: ['', Validators.required],
      username: ['', Validators.required]
    });

  }

  create() {
    const instructor = new Instructor();
    instructor.firstName = this.form.controls.firstName.value;
    instructor.lastName = this.form.controls.lastName.value;
    instructor.middleName = this.form.controls.middleName.value;
    instructor.employeeNumber = this.form.controls.employeeNumber.value;
    instructor.honorifics = this.form.controls.honorifics.value;
    instructor.username = this.form.controls.username.value;

    this.isSaving = true;

    this.instructorService.addInstructor(instructor).subscribe((ins: Instructor) => {
      if (ins !== null) {
        this.router.navigate(['/admin/user-accounts']);
      } else {
        this.isSaving = false;
        alert('Error occured!');
      }
    });
  }
}
