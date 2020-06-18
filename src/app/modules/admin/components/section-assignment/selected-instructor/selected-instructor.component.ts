import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Instructor} from '../../../../../core/models/instructor';
import {InstructorService} from '../../../../../core/services/instructor.service';
import {Assignment} from '../../../../../core/models/assignment';

@Component({
  selector: 'app-selected-instructor',
  templateUrl: './selected-instructor.component.html',
  styleUrls: ['./selected-instructor.component.sass']
})
export class SelectedInstructorComponent implements OnInit {
  @Input() instructor: Instructor;
  @Output() needsUpdate = new EventEmitter<boolean>();
  isAddDisabled = true;
  course: string;
  year: string;
  section: string;
  constructor(private instructorService: InstructorService) { }

  ngOnInit(): void {
  }


  addAssignment() {
    this.isAddDisabled = true;
  }


  update() {
    this.isAddDisabled = !(this.course && this.year && this.section);
  }

  // tslint:disable-next-line:variable-name
  remove(id: number, i_id: number) {
    this.instructorService.removeAssignment(id, i_id).subscribe(res => {
      if (res) {
        alert('Assignment Removed!');
        // update
        this.needsUpdate.emit(true);
      }
    });
  }

  add() {
    const ass = new Assignment();
    ass.course = this.course;
    ass.year = this.year;
    ass.section = this.section;
    this.instructorService.addAssignment(ass, this.instructor.id).subscribe((ins: Instructor) => {
        if (ins) {
          this.needsUpdate.emit(true);
        }
    });
  }
}
