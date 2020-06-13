import {Component, Input, OnInit} from '@angular/core';
import {ExamEditorService} from '../../../../services/exam-editor.service';
import {ExamItem} from '../../../../../../core/models/exam-item';

@Component({
  selector: 'app-exam-item-editor',
  templateUrl: './exam-item-editor.component.html',
  styleUrls: ['./exam-item-editor.component.sass']
})
export class ExamItemEditorComponent implements OnInit {
  identification = true;
  @Input() num: number;
  examItem: ExamItem;

  constructor(private examEditorService: ExamEditorService) { }

  ngOnInit(): void {
  }

  toggle(bool: boolean) {
    this.identification = bool;
  }


  update() {
    // trigger update here

  }
}
