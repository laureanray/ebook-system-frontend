import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BookService} from '../../../../../../core/services/book.service';
import {Topic} from '../../../../../../core/models/topic';
import {Book} from '../../../../../../core/models/book';
import {BookEditorService} from '../../../../services/book-editor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.sass']
})
export class DeleteModalComponent implements OnInit {
  disabled = true;
  isDeleting = false;
  topicTitle: string;
  inputValue: string;


  constructor(private dialogRef: MatDialogRef<DeleteModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private bookService: BookService,
              private bookEditorService: BookEditorService,
              private router: Router) {
    this.topicTitle = this.data.topicTitle;
  }

  ngOnInit(): void {
  }

  confirm() {
    this.isDeleting = true;
    this.bookService.deleteTopic(this.data.topicId).subscribe((topic: Topic) => {
      this.isDeleting = false;
      this.bookService.getBook(this.data.bookId).subscribe((book: Book) => {
        this.bookEditorService.setCurrentBook(book);
        this.router.navigate([`/admin/book/${this.data.bookId}/details`]);
        this.dialogRef.close();
      });
    });
  }

  change() {
    if (this.inputValue === this.data.topicTitle) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
}
