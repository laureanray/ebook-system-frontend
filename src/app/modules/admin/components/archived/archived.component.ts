import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../../../../core/models/student';
import {Instructor} from '../../../../core/models/instructor';
import {StudentService} from '../../../../core/services/student.service';
import {InstructorService} from '../../../../core/services/instructor.service';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.sass']
})
export class ArchivedComponent implements OnInit {
  students: Student[];
  instructors: Instructor[];
  constructor(private studentService: StudentService, private instructorService: InstructorService) { }
  studentDataSource: MatTableDataSource<Student>;
  instructorDataSource: MatTableDataSource<Instructor>;
  studentDisplayedColumns: string[] = ['id', 'studNum', 'name', 'course', 'year', 'section', 'trash'];
  facultyDisplayedColumns: string[] = ['id', 'empNum', 'name', 'honorifics', 'username', 'trash'];
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
    this.init();
  }

  init() {
    this.studentService.getArchivedStudents().subscribe((students: Student[]) => {
      this.students = students;
      this.studentDataSource = new MatTableDataSource(students);
    });

    this.instructorService.getArchivedInstructors().subscribe((instructors: Instructor[]) => {
      this.instructors = instructors;
      this.instructorDataSource = new MatTableDataSource(instructors);
    });
  }

  toggle(bool: boolean) {
    this.studentTable = bool;
  }

  restore(id: any, type: string) {
    switch (type) {
      case 'student':
        this.studentService.restore(id).subscribe(res => {
          if (res) { this.init(); }
        });
        break;
      case 'instructor':
        this.instructorService.restore(id).subscribe(res => {
          if (res) { this.init(); }
        });
        break;
    }
  }
}
