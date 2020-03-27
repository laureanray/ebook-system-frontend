import { Component, OnInit } from '@angular/core';

export interface Subjects {
  bookTitle: string;
  professor: string;
}

const SubjectsData: Subjects[] = [
  {bookTitle: 'Basic C++ Programming', professor: 'Engr. Laurean Ray S. Bahala'},
  {bookTitle: 'Discrete Mathematics', professor: 'Dr. Laurean Ray S. Bahala'},

];

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.sass']
})
export class ViewProfileComponent implements OnInit {

  displayedColumns = ['bookTitle', 'professor'];
  dataSource = SubjectsData;

  ngOnInit(): void {
  }

}
