import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './components/student/student.component';
import {NgModule} from '@angular/core';
import {SetPasswordComponent} from './components/set-password/set-password.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: 'set-password', component: SetPasswordComponent},
  { path: '', component: StudentComponent,
    children: [
      { path: 'home', component: HomeComponent}
    ]
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
