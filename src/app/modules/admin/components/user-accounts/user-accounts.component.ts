import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../../../../core/models/student';
import {Instructor} from '../../../../core/models/instructor';
import {StudentService} from '../../../../core/services/student.service';
import {InstructorService} from '../../../../core/services/instructor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.sass']
})
export class UserAccountsComponent implements OnInit {
  students: Student[];
  instructors: Instructor[];

  constructor(private studentService: StudentService,
              private instructorService: InstructorService,
              private router: Router) {
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

  init() {
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

  ngOnInit(): void {
    this.init();
  }

  toggle(bool: boolean) {
    this.studentTable = bool;
  }


  edit(id: number, type: string) {
    this.router.navigate(['/edit'], {
      queryParams: {
        id,
        type
      },
      queryParamsHandling: 'merge'
    });
  }

  archive(id: number, type: string) {
    console.log(id);
    switch (type) {
      case 'student':
        this.studentService.archive(id).subscribe(res => {
          if (res) { this.init(); }
        });
        break;
      case 'instructor':
        this.instructorService.archive(id).subscribe(res => {
          if (res) { this.init(); }
        });
        break;
    }
  }
}

