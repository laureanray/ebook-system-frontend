import { Component, OnInit } from '@angular/core';
import {InstructorService} from '../../../../core/services/instructor.service';
import {Instructor} from '../../../../core/models/instructor';

@Component({
  selector: 'app-section-assignment',
  templateUrl: './section-assignment.component.html',
  styleUrls: ['./section-assignment.component.sass']
})
export class SectionAssignmentComponent implements OnInit {
  public fieldArray: Array<any> = [];
  public newAttribute: any = {};
  instructors: Instructor[];
  selected: Instructor;
  constructor(private instructorService: InstructorService) {
    this.selected = null;
  }

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
   this.update();
  }

  selectInstructor(id: number) {
    this.selected = this.instructors.find((i: Instructor) => {
      return i.id === id;
    });
  }

  update() {
    this.instructorService.getAllInstructors().subscribe((instructors: Instructor[])  => {
      this.instructors = instructors;
      this.selectInstructor(this.selected.id);
    });
  }
}
