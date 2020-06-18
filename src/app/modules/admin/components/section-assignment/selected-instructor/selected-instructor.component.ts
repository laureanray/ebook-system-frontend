import {Component, Input, OnInit} from '@angular/core';
import {Instructor} from '../../../../../core/models/instructor';
import {InstructorService} from '../../../../../core/services/instructor.service';

@Component({
  selector: 'app-selected-instructor',
  templateUrl: './selected-instructor.component.html',
  styleUrls: ['./selected-instructor.component.sass']
})
export class SelectedInstructorComponent implements OnInit {
  @Input() instructor: Instructor;
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

  remove(id: number) {
    this.instructorService.removeAssignment(id).subscribe(res => {
      if (res) {
        alert('assignment remove');
        // update
      }
    });
  }
}
