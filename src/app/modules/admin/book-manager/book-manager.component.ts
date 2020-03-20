import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.sass']
})
export class BookManagerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
