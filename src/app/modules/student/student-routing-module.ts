import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: StudentComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
