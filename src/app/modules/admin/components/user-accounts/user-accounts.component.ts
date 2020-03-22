import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
// tslint:disable-next-line:class-name
export interface studentInfo {
  id: number;
  studNum: string;
  name: string;
  course: string;
  year: string;
  section: string;
  edit: string;
  trash: string;
}
// tslint:disable-next-line:class-name
export interface facultyInfo {
  id: number;
  empNum: string;
  name: string;
  honorifics: string;
  username: string;
  edit: string;
  trash: string;
}

const studentData: studentInfo[] = [
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
];

const facultyData: facultyInfo[] = [
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
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

