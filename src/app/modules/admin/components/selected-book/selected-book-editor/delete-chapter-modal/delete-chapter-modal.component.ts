import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-chapter-modal',
  templateUrl: './delete-chapter-modal.component.html',
  styleUrls: ['./delete-chapter-modal.component.sass']
})
export class DeleteChapterModalComponent implements OnInit {
  chapterTitle: string;
  inputValue: string;
  disabled = true;
  constructor(private dialogRef: MatDialogRef<DeleteChapterModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.chapterTitle = this.data.chapterTitle;
  }

  ngOnInit(): void {
  }

  change() {

  }

  confirm() {

  }
}
