import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-book-details',
  templateUrl: './selected-book-details.component.html',
  styleUrls: ['./selected-book-details.component.sass']
})
export class SelectedBookDetailsComponent implements OnInit {

  public fieldArray: Array<any> = [];
  public newAttribute: any = {};
  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};

    function updateScroll() {
      const element = document.getElementById('add-section-container');
      element.scrollTop = element.scrollHeight;
    }
    setInterval(updateScroll, 1);
  }
  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
