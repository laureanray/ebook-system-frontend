import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface GradesTable {
  chapter: string;
  score: number;
  grade: number;
}

const CplusData: GradesTable[] = [
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100}
];
const DiscreteData: GradesTable[] = [
  {chapter: 'Discrete', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100}
];
const AssemblyData: GradesTable[] = [
  {chapter: 'Assembly', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100},
  {chapter: 'Chapter 1', score: 10, grade: 100}
];

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.sass']
})

export class GradesComponent implements OnInit {
  GradesDisplayedColumns: string[] = ['chapter', 'score', 'grade'];
  GradeDataSource = new MatTableDataSource(CplusData);
  selected = 'cplus';

  ngOnInit(): void {
  }

  onChanges() {
    switch (this.selected) {
      case 'cplus':
        this.GradeDataSource = new MatTableDataSource(CplusData);
        break;
      case 'discrete':
        this.GradeDataSource = new MatTableDataSource(DiscreteData);
        break;
      case 'assembly':
        this.GradeDataSource = new MatTableDataSource(AssemblyData);
        break;
    }

  }
}
