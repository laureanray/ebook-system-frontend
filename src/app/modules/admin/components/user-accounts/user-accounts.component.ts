import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  id: number;
  studNum: string;
  course: string;
  year: string;
  section: string;
  edit: string;
  trash: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, studNum: '2015-0123-MN-0' , name: 'Esteban, Charlene Mae De Guzman',
    course: 'BS in Computer Engineering', year: '5th year', section: '1', edit: 'edit', trash: 'delete'},
  // {id: 2, studNum: '2015-12345-MN-0' , name: 'Bahala, Laurean Ray Salvan',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 3, studNum: '2015-67890-MN-0' , name: 'Morita, Ami Verzola',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 4, studNum: '2015-99999-MN-0' , name: 'Cada, Mark Jay Villablanca',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 5, studNum: '2015-67890-MN-0' , name: 'Morita, Ami Verzola',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 6, studNum: '2015-99999-MN-0' , name: 'Cada, Mark Jay Villablanca',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 7, studNum: '2015-67890-MN-0' , name: 'Morita, Ami Verzola',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 8, studNum: '2015-99999-MN-0' , name: 'Cada, Mark Jay Villablanca',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 9, studNum: '2015-99999-MN-0' , name: 'Cada, Mark Jay Villablanca',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 10, studNum: '2015-67890-MN-0' , name: 'Morita, Ami Verzola',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 11, studNum: '2015-99999-MN-0' , name: 'Cada, Mark Jay Villablanca',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 12, studNum: '2015-99999-MN-0' , name: 'Cada, Mark Jay Villablanca',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 13, studNum: '2015-67890-MN-0' , name: 'Morita, Ami Verzola',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 14, studNum: '2015-99999-MN-0' , name: 'Cada, Mark Jay Villablanca',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 15, studNum: '2015-99999-MN-0' , name: 'Cada, Mark Jay Villablanca',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 16, studNum: '2015-67890-MN-0' , name: 'Morita, Ami Verzola',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
  // {id: 17, studNum: '2015-99999-MN-0' , name: 'Cada, Mark Jay Villablanca',
  //   course: 'BS in Computer Engineering', year: '5th year', section: '1'},
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.sass']
})
export class UserAccountsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'studNum', 'name', 'course', 'year', 'section', 'edit', 'trash'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
  }
}

