import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../../../core/services/book.service';
import {HttpEventType} from '@angular/common/http';
import {UploadResponse} from '../../../../core/models/upload-response';
import {Book} from '../../../../core/models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.sass']
})
export class AddBookComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  uploadedFilePath: string;

  public progress: number;
  public message: string;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private bookService: BookService) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      bookTitle: ['', Validators.required],
      authors: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      course: ['', Validators.required],
      yearLevel: ['', Validators.required],
      giveAccessToAll: []
    });
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    const fileToUpload = files[0] as File;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.bookService.uploadBookCover(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          const body = event.body as UploadResponse;
          console.log(body.dbPath);
          this.uploadedFilePath = body.dbPath;
        }
      });
  }

  fileChange(files) {
    console.log(files);
    this.uploadFile(files);
  }

  save() {
    const book = new Book();
    book.bookTitle = this.firstFormGroup.controls.bookTitle.value;
    book.bookAuthor = this.firstFormGroup.controls.authors.value;
    console.log(this.secondFormGroup.controls.giveAccessToAll.value);
    console.log(book);
    // this.bookService.addBook(book).subscribe((b: Book) => {
    //   console.log(b);
    // });
  }

  toggle() {
    setTimeout(() => {
      if (this.secondFormGroup.controls.giveAccessToAll.value) {
        this.secondFormGroup.controls.course.disable();
        this.secondFormGroup.controls.yearLevel.disable();
        console.log(this.secondFormGroup.controls.giveAccessToAll.value);
      } else {
        this.secondFormGroup.controls.course.enable();
        this.secondFormGroup.controls.yearLevel.enable();
      }
      console.log(this.secondFormGroup.controls.giveAccessToAll.value);
    }, 5);
  }
}
