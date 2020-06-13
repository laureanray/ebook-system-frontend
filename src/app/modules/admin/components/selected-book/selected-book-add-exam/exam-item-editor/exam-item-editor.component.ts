import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-item-editor',
  templateUrl: './exam-item-editor.component.html',
  styleUrls: ['./exam-item-editor.component.sass']
})
export class ExamItemEditorComponent implements OnInit {
  identification = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(bool: boolean) {
    this.identification = bool;
  }
}
