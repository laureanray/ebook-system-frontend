import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import {StudentRoutingModule} from './student-routing-module';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { StudentSidebarComponent } from './components/student-sidebar/student-sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BookLibraryComponent } from './components/book-library/book-library.component';
import { GradesComponent } from './components/grades/grades.component';
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [StudentComponent, SetPasswordComponent, StudentSidebarComponent, BookLibraryComponent, GradesComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatTableModule,
    MatSelectModule,
    FormsModule
  ],
  bootstrap: [StudentComponent]
})
export class StudentModule { }
