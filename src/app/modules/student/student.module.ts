import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import {StudentRoutingModule} from './student-routing-module';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { StudentSidebarComponent } from './components/student-sidebar/student-sidebar.component';
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [StudentComponent, SetPasswordComponent, HomeComponent, StudentSidebarComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule
  ],
  bootstrap: [StudentComponent]
})
export class StudentModule { }
