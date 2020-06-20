import {Component, OnDestroy, OnInit} from '@angular/core';
import {InstructorService} from '../../../core/services/instructor.service';
import {Assignment} from '../../../core/models/assignment';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {Instructor} from '../../../core/models/instructor';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-assigned-sections',
  templateUrl: './assigned-sections.component.html',
  styleUrls: ['./assigned-sections.component.sass']
})
export class AssignedSectionsComponent implements OnInit, OnDestroy {
  assignments: Assignment[];
  instructor: Instructor;
  authSub: Subscription;
  insSub: Subscription;
  constructor(private instructorService: InstructorService,
              private authService: AuthenticationService) {
    this.authSub = this.authService.currentUser.subscribe((instructor: Instructor) => {
        this.instructor = instructor;
    });
  }

  ngOnInit(): void {
    if (this.instructor) {
      this.insSub = this.instructorService.getAssignments(this.instructor.id).subscribe((assignment: Assignment[]) => {
        if (assignment) {
          this.assignments = assignment;
        }
      }, error => {
        alert(`Error: ${error}`);
      });
    }
  }

  ngOnDestroy(): void {
    this.insSub.unsubscribe();
    this.authSub.unsubscribe();
  }
}
