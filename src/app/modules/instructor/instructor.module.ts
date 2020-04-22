import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InstructorComponent} from './instructor/instructor.component';
import {InstructorRoutingModule} from './instructor-routing.module';
import {MaterialModule} from '../material.module';

@NgModule({
  declarations: [InstructorComponent],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    MaterialModule
  ]
})
export class InstructorModule {
}
