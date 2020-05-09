import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BookService} from '../../../../../../core/services/book.service';
import {Router} from '@angular/router';
import {BookEditorService} from '../../../../services/book-editor.service';
import {Book} from '../../../../../../core/models/book';

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
              private bookEditorService: BookEditorService,
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
      this.bookService.getBook(this.data.bookId).subscribe((book: Book) => {
        if (book) {
          this.bookEditorService.setCurrentBook(book);
          this.isDeleting = false;
          this.router.navigate([`/admin/book/${this.data.bookId}/details`]);
          this.dialogRef.close();
        }
      });
    });
  }
}
