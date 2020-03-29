import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-assignment',
  templateUrl: './section-assignment.component.html',
  styleUrls: ['./section-assignment.component.sass']
})
export class SectionAssignmentComponent implements OnInit {

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
