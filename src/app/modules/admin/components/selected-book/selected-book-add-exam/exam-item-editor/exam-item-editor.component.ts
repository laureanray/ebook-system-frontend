import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ExamEditorService} from '../../../../services/exam-editor.service';
import {ExamItem} from '../../../../../../core/models/exam-item';
import {Subscription} from 'rxjs';
import {Exam} from '../../../../../../core/models/exam';
import {Choice} from '../../../../../../core/models/choice';

@Component({
  selector: 'app-exam-item-editor',
  templateUrl: './exam-item-editor.component.html',
  styleUrls: ['./exam-item-editor.component.sass']
})
export class ExamItemEditorComponent implements OnInit, OnDestroy {
  identification = true;
  @Input() examItem: ExamItem;
  examEditorSub: Subscription;
  exam: Exam;
  question: string;
  answer: string;
  examType = 'ID';
  options = [
    '',
    '',
    '',
    ''
  ];


  constructor(private examEditorService: ExamEditorService) {
    this.examEditorSub = this.examEditorService.getCurrentExam().subscribe((ex: Exam) => {
      if (ex) {
        this.exam = ex;
      }
    });
  }

  ngOnInit(): void {
  }

  toggle(bool: boolean) {
    this.identification = bool;
    this.update();
  }


  update() {
    // trigger update here
    this.examItem.examType = this.examType;
    this.examItem.question = this.question;
    if (!this.identification) {
      // tslint:disable-next-line:radix
      this.examItem.answer = this.options[parseInt(this.answer) - 1];

      if (!this.answer) {
        this.answer = '1';
      }
    } else {
      this.examItem.answer = this.answer;
    }
    this.examItem.choices = [];

    for (let i = 0; i < 4; i++) {
      const choice = new Choice();
      choice.choiceText = this.options[i];
      this.examItem.choices.push(choice);
    }

    this.exam.examItems.forEach((it: ExamItem) => {
      if (it.num === this.examItem.num) {
        it = this.examItem;
      }
    });
    this.examEditorService.updateCurrentExam(this.exam);
  }

  ngOnDestroy() {
    this.examEditorSub.unsubscribe();
  }

  changeType() {

  }

  delete() {
    this.exam.examItems = this.exam.examItems.filter((ei: ExamItem) => {
      return ei.num !== this.examItem.num;
    });
    this.examEditorService.updateCurrentExam(this.exam);
  }
}
