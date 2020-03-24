import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
export interface StudentInfo {
  id: number;
  studNum: string;
  name: string;
  course: string;
  year: string;
  section: string;
  edit: string;
  trash: string;
}
export interface FacultyInfo {
  id: number;
  empNum: string;
  name: string;
  honorifics: string;
  username: string;
  edit: string;
  trash: string;
}

const studentData: StudentInfo[] = [
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
];

const facultyData: FacultyInfo[] = [
  {id: 1, empNum: '2015-0000-MN-0', name: 'Rodriguez, Joshua Benjamin', honorifics: 'Engr.', username: 'jbrodriguez',
    edit: 'edit', trash: 'delete'}
];

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.sass']
})
export class UserAccountsComponent implements OnInit {

  studentDisplayedColumns: string[] = ['id', 'studNum', 'name', 'course', 'year', 'section', 'edit', 'trash'];
  studentDataSource = new MatTableDataSource(studentData);
  facultyDisplayedColumns: string[] = ['id', 'empNum', 'name', 'honorifics', 'username', 'edit', 'trash'];
  facultyDataSource = new MatTableDataSource(facultyData);
  public showStudent = true;
  public showFaculty = false;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if ( this.showStudent === true) {
      this.studentDataSource.filter = filterValue.trim().toLowerCase();
    } else {
      this.facultyDataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  ngOnInit(): void {
  }

  toggleStudent() {
    this.showStudent = true;
    this.showFaculty = false;
  }
  toggleFaculty() {
    this.showStudent = false;
    this.showFaculty = true;
  }
}

