import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../../../../core/models/student';
import {Instructor} from '../../../../core/models/instructor';
import {StudentService} from '../../../../core/services/student.service';
import {InstructorService} from '../../../../core/services/instructor.service';


@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.sass']
})
export class UserAccountsComponent implements OnInit {
  students: Student[];
  instructors: Instructor[];

  constructor(private studentService: StudentService, private instructorService: InstructorService) {
  }
  studentDataSource: MatTableDataSource<Student>;
  instructorDataSource: MatTableDataSource<Instructor>;
  studentDisplayedColumns: string[] = ['id', 'studNum', 'name', 'course', 'year', 'section', 'edit', 'trash'];
  facultyDisplayedColumns: string[] = ['id', 'empNum', 'name', 'honorifics', 'username', 'edit', 'trash'];
  studentTable = true;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if ( this.studentTable === true) {
      this.studentDataSource.filter = filterValue.trim().toLowerCase();
    } else {
      this.instructorDataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((students: Student[]) => {
      this.students = students;
      this.studentDataSource = new MatTableDataSource(students);
      console.log(students);
    });

    this.instructorService.getAllInstructors().subscribe((instructors: Instructor[]) => {
      this.instructors = instructors;
      this.instructorDataSource = new MatTableDataSource(instructors);
    });
  }

  toggle(bool: boolean) {
    this.studentTable = bool;
  }

}

