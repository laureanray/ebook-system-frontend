import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../../../../environments/environment';

@Component({
  selector: 'app-book-item-card',
  templateUrl: './book-item-card.component.html',
  styleUrls: ['./book-item-card.component.sass']
})
export class BookItemCardComponent implements OnInit {
  @Input() bookId: number;
  @Input() bookTitle: string;
  @Input() bookCover: string;
  @Input() bookAuthor: string;
  bookCoverURLParsed: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.bookCover === null) {
      // TODO: replace this with proper placeholder
      this.bookCoverURLParsed = '/assets/cover.png';
    } else {
      this.bookCoverURLParsed = `${environment.apiRoot}/${this.bookCover}`;
    }
  }

  onClick() {
    this.router.navigate([`admin/book/${this.bookId}`]);
  }

}
