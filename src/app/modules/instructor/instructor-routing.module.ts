import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InstructorComponent} from './instructor/instructor.component';
import {AssignedSectionsComponent} from './assigned-sections/assigned-sections.component';

const routes: Routes = [
  { path: '', redirectTo: 'assigned-sections' },
  { path: '', component: InstructorComponent,
    children: [
      { path: 'assigned-sections', component: AssignedSectionsComponent}
    ]
  }
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
