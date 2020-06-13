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
  options = [
    '',
    '',
    '',
    ''
  ];


  constructor(private examEditorService: ExamEditorService) {
    this.examEditorService.getCurrentExam().subscribe((ex: Exam) => {
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
    this.examItem.question = this.question;
    this.examItem.answer = this.answer;
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
}
