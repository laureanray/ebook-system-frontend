import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ExamService} from '../../../../core/services/exam.service';
import {Subscription} from 'rxjs';
import {Book} from '../../../../core/models/book';
import {BookService} from '../../../../core/services/book.service';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {Student} from '../../../../core/models/student';
import {Chapter} from '../../../../core/models/chapter';
import {Grade} from '../../../../core/models/grade';


@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.sass']
})

export class GradesComponent implements OnInit, OnDestroy {
  GradesDisplayedColumns: string[] = ['book', 'chapter', 'score', 'percent'];
  selected = 'cplus';
  authSub: Subscription;
  gradeSub: Subscription;
  student: Student;
  grades = [];
  constructor(private examService: ExamService,
              private bookService: BookService,
              private authService: AuthenticationService) {
    this.authSub = this.authService.currentUser.subscribe((student: Student) => {
      this.student = student;
      if (this.student) {
        this.gradeSub = this.examService.getGrades(this.student.id).subscribe((grades: Grade[]) => {
          this.grades = grades;
          console.log(grades);
          if (this.grades) {
            this.grades.forEach((g: Grade) => {
              g.percent = Math.trunc((g.score / g.total ) * 100 );
            });
          }
        });
      }
    });
  }

  ngOnInit(): void {

  }


  ngOnDestroy(): void {
    this.authSub.unsubscribe();
    this.gradeSub.unsubscribe();
  }

}
