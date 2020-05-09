import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BookService} from '../../../../../../core/services/book.service';

@Component({
  selector: 'app-delete-chapter-modal',
  templateUrl: './delete-chapter-modal.component.html',
  styleUrls: ['./delete-chapter-modal.component.sass']
})
export class DeleteChapterModalComponent implements OnInit {
  chapterTitle: string;
  inputValue: string;
  disabled = true;
  isDeleting = false;
  constructor(private dialogRef: MatDialogRef<DeleteChapterModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private bookService: BookService,
              private router: Router) {
    this.chapterTitle = this.data.chapterTitle;
  }

  ngOnInit(): void {
  }

  change() {
    if (this.inputValue === this.data.chapterTitle) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  confirm() {
    this.isDeleting = true;
    this.bookService.deleteChapter(this.data.chapterId).subscribe(chapter => {
      console.log(chapter);
      this.isDeleting = false;
    });
  }
}
