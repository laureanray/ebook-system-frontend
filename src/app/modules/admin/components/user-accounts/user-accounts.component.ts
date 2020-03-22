import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
// tslint:disable-next-line:class-name
export interface studentInfo {
  name: string;
  id: number;
  studNum: string;
  course: string;
  year: string;
  section: string;
  edit: string;
  trash: string
}

const ELEMENT_DATA: studentInfo[] = [
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
];

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.sass']
})
export class UserAccountsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'studNum', 'name', 'course', 'year', 'section', 'edit', 'trash'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  public showStudent = true;
  public showFaculty = false;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

  toggle() {
    this.showStudent = true;
    this.showFaculty = false;
  }
  toggleF() {
    this.showStudent = false;
    this.showFaculty = true;
  }
}

