import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookEditorService} from '../../services/book-editor.service';

@Component({
  selector: 'app-selected-book',
  templateUrl: './selected-book.component.html',
  styleUrls: ['./selected-book.component.sass']
})
export class SelectedBookComponent implements OnInit {
  bookId: number;
  bookDetails: boolean;
  constructor(private activatedRoute: ActivatedRoute, private bookEditorService: BookEditorService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params.id;

    });

    this.bookEditorService.getDetailsShown().subscribe(state => {
      this.bookDetails = state;
    });

    const that = this;

    setTimeout(() => {
      that.bookEditorService.initialize();
    });
  }

  toggle() {
    this.bookEditorService.isDetailsShown(!this.bookDetails);
    console.log(this.bookDetails);
  }
}
