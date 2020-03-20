import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-item-card',
  templateUrl: './book-item-card.component.html',
  styleUrls: ['./book-item-card.component.sass']
})
export class BookItemCardComponent implements OnInit {
  userProgress = 20; // this will be pulled from the server

  @Input() bookId: number;
  @Input() bookTitle: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate([`admin/book/${this.bookId}`]);
  }

}
