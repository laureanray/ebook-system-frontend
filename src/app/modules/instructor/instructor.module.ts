import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorComponent } from './instructor/instructor.component';
import {InstructorRoutingModule} from './instructor-routing.module';

@NgModule({
  declarations: [InstructorComponent],
  imports: [
    CommonModule,
    InstructorRoutingModule
  ]
})
export class InstructorModule { }
