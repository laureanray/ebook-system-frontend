import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../../../../core/models/student';
import {StudentService} from '../../../../../core/services/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.sass']
})
export class AddStudentComponent implements OnInit {
  public studentForm: FormGroup;
  isSaving = false;
  isDisabled = true;
  constructor(private formBuilder: FormBuilder, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      studentNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      course: ['', Validators.required],
      year: ['', Validators.required],
      section: ['', Validators.required]
    });
  }


  create() {
    this.isSaving = true;
    const student = new Student();
    student.firstName = this.studentForm.controls.firstName.value;
    student.lastName = this.studentForm.controls.lastName.value;
    student.studentNumber = this.studentForm.controls.studentNumber.value;
    student.middleName = this.studentForm.controls.middleName.value;
    student.course = this.studentForm.controls.course.value;
    student.year = this.studentForm.controls.year.value;
    student.section = this.studentForm.controls.section.value;

    console.log(student);
    this.studentService.addStudent(student).subscribe((s: Student) => {
        // trigger data fetch?
        this.isSaving = false;
        console.log(s);
        this.router.navigate(['/admin/user-accounts']);
    }, error => {
      alert('An error has occurred.');
    });
  }

  update() {
    this.isDisabled = !(this.studentForm.controls.firstName.value &&
      this.studentForm.controls.lastName.value &&
      this.studentForm.controls.middleName.value &&
      this.studentForm.controls.studentNumber.value &&
      this.studentForm.controls.course.value &&
      this.studentForm.controls.year.value &&
      this.studentForm.controls.section.value);
  }
}
