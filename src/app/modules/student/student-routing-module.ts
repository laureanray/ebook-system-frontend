import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './components/student/student.component';
import {NgModule} from '@angular/core';
import {SetPasswordComponent} from './components/set-password/set-password.component';
import {BookLibraryComponent} from './components/book-library/book-library.component';
import {GradesComponent} from './components/grades/grades.component';
import {ViewProfileComponent} from './components/view-profile/view-profile.component';
// import {InitialHomeComponent} from './components/initial-home/initial-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'book-library'},
  { path: 'set-password', component: SetPasswordComponent},
  { path: '', component: StudentComponent,
    children: [
      { path: 'book-library', component: BookLibraryComponent},
      { path: 'grades', component: GradesComponent},
      { path: 'profile', component: ViewProfileComponent}
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
