import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InstructorComponent} from './instructor/instructor.component';
import {InstructorRoutingModule} from './instructor-routing.module';
import {MaterialModule} from '../material.module';
import { AssignedSectionsComponent } from './assigned-sections/assigned-sections.component';

@NgModule({
  declarations: [InstructorComponent, AssignedSectionsComponent],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    MaterialModule
  ]
})
export class InstructorModule {
}
