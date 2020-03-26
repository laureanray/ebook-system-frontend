import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {NgModule} from '@angular/core';
import {SetPasswordComponent} from './set-password/set-password.component';

const routes: Routes = [
  { path: 'set-password', component: SetPasswordComponent},
  { path: '', component: StudentComponent,
    // children: [
    //   { path: 'set-password', component: SetPasswordComponent}
    // ]
    }
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
