import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import {StudentRoutingModule} from './student-routing-module';
import { SetPasswordComponent } from './set-password/set-password.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [StudentComponent, SetPasswordComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  bootstrap: [StudentComponent]
})
export class StudentModule { }
