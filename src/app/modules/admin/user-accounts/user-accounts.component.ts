import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.sass']
})
export class UserAccountsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'studNum', 'name', 'course', 'yrLevel', 'section'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
  }
}
export interface PeriodicElement {
  studNum: string;
  position: number;
  course: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, studNum: '2015-12345-MN-0', name: 'Dela Cruz, Juan Reyes', course: 'BS in Computer Engineering'},
  {position: 2, studNum: '2015-12345-MN-0', name: 'Bahala, Laurean Ray Salvan', course: 'He'},
  {position: 3, studNum: '2015-12345-MN-0', name: 'Esteban, Charlene Mae De Guzman', course: 'Li'},
  {position: 4, studNum: '2015-12345-MN-0', name: 'Morita, Ami Verzola', course: 'Be'},

];
