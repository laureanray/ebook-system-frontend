import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InstructorComponent} from './instructor/instructor.component';
import {InstructorRoutingModule} from './instructor-routing.module';
import {MaterialModule} from '../material.module';
import { AssignedSectionsComponent } from './assigned-sections/assigned-sections.component';
import { SetInstructorPasswordComponent } from './set-password/set-password-component-instructor.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [InstructorComponent, AssignedSectionsComponent, SetInstructorPasswordComponent],
    imports: [
        CommonModule,
        InstructorRoutingModule,
        MaterialModule,
        FormsModule
    ]
})
export class InstructorModule {
}
