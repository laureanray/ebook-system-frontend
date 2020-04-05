import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorComponent } from './instructor/instructor.component';
import {InstructorRoutingModule} from './instructor-routing.module';
// import { InstructorSidebarComponent } from './instructor-sidebar/instructor-sidebar.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [InstructorComponent],
    imports: [
        CommonModule,
        InstructorRoutingModule,
        MatListModule
    ]
})
export class InstructorModule { }
