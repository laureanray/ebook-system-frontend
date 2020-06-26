import {Component, OnDestroy, OnInit} from '@angular/core';
import {InstructorService} from '../../../core/services/instructor.service';
import {Assignment} from '../../../core/models/assignment';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {Instructor} from '../../../core/models/instructor';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

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
              private authService: AuthenticationService,
              private router: Router) {
    this.authSub = this.authService.currentUser.subscribe((instructor: Instructor) => {
        this.instructor = instructor;
        if (instructor) {
          console.log(instructor.firstLogin);
          if (instructor.firstLogin === true) {
            this.router.navigate(['/instructor/set-password']);
          }
        }
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
    // this.insSub.unsubscribe();
    // this.authSub.unsubscribe();
  }
}
