import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InstructorComponent} from './instructor/instructor.component';

const routes: Routes = [
  { path: '', component: InstructorComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
