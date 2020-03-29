import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../../../core/services/book.service';
import {HttpEventType} from '@angular/common/http';
import {UploadResponse} from '../../../../core/models/upload-response';

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
      secondCtrl: ['', Validators.required]
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
}
