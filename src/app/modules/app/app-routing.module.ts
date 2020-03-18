import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../../shared/home/home.component';
import {StudentLoginComponent} from '../../shared/student-login/student-login.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: StudentLoginComponent},
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
    data: { role: 'admin' }
  },
  {
    path: 'instructor',
    loadChildren: () => import('../instructor/instructor.module').then(m => m.InstructorModule),
    data: { role: 'instructor'}
  },
  {
    path: 'student',
    loadChildren: () => import('../student/student.module').then(m => m.StudentModule),
    data: { role: 'student' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
