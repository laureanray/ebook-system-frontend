import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './components/student/student.component';
import {StudentRoutingModule} from './student-routing-module';
import {SetPasswordComponent} from './components/set-password/set-password.component';
import {StudentSidebarComponent} from './components/student-sidebar/student-sidebar.component';
import {BookLibraryComponent} from './components/book-library/book-library.component';
import {GradesComponent} from './components/grades/grades.component';
import {FormsModule} from '@angular/forms';
import {ViewProfileComponent} from './components/view-profile/view-profile.component';
import {MaterialModule} from '../material.module';

@NgModule({
  declarations: [
    StudentComponent,
    SetPasswordComponent,
    StudentSidebarComponent,
    BookLibraryComponent,
    GradesComponent,
    ViewProfileComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    MaterialModule
  ],
  bootstrap: [StudentComponent]
})
export class StudentModule {
}
