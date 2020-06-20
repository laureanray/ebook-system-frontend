import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {Exam} from '../../../../core/models/exam';
import {ExamService} from '../../../../core/services/exam.service';
import {Grade} from '../../../../core/models/grade';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {Student} from '../../../../core/models/student';

@Component({
  selector: 'app-take-exam',
  templateUrl: './take-exam.component.html',
  styleUrls: ['./take-exam.component.sass']
})
export class TakeExamComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  examSub: Subscription;
  authSub: Subscription;
  @Input() exam: Exam;
  isDisabled = true;
  answers = {};
  isSubmitting = false;
  taken = false;
  student: Student;
  grade: Grade;
  percent: string;
  constructor(private route: ActivatedRoute, private examService: ExamService, private authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.examSub = this.examService.getGrade(this.exam?.id).subscribe((grade: Grade) => {
      if (grade) {
        this.taken = true;
        this.grade = grade;
        this.percent = (Math.trunc((this.grade.score / this.grade.total)  * 100.0)) + '%';
      }
    });
    this.authSub = this.authenticationService.currentUser.subscribe((student: Student) => {
      this.student = student;
    });
  }

  ngOnDestroy(): void {
    // this.routeSub.unsubscribe();
    this.examSub.unsubscribe();
  }

  submit() {
    console.log(this.answers);
    this.isSubmitting = true;
    const grade = new Grade();
    grade.examId = this.exam.id;
    grade.score = this.calculateScore();
    grade.total = this.exam.examItems.length;
    grade.studentId = this.student.id;
    this.examService.addGrade(grade).subscribe((g: Grade) => {
      if (g) {
        // Show success
        console.log(g);
        this.isSubmitting = false;
      }
    }, err => {
      alert('Error occurred: ' + err);
      this.isSubmitting = false;
    });
  }

  update() {
     this.isDisabled = Object.keys(this.answers).length !== this.exam.examItems.length;
  }

  calculateScore() {
    let correct = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.exam.examItems.length; i++) {
      if (this.exam.examItems[i].answer === this.answers[this.exam.examItems[i].id.toString()]) {
        correct++;
      }
    }
    return correct;
  }
}
