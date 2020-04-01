import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StudentLoginComponent} from './student-login/student-login.component';
import {NotFoundComponent} from '../../shared/not-found/not-found.component';
import {InstructorAdminLoginComponent} from './instructor-admin-login/instructor-admin-login.component';
import {AuthGuard} from '../../core/authentication/auth.guard';


const routes: Routes = [
  { path: '', component: StudentLoginComponent},
  { path: 'admin-login', component: InstructorAdminLoginComponent},
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: { role: 'Admin' }
  },
  {
    path: 'instructor',
    loadChildren: () => import('../instructor/instructor.module').then(m => m.InstructorModule),
    canActivate: [AuthGuard],
    data: { role: 'Instructor'}
  },
  {
    path: 'student',
    loadChildren: () => import('../student/student.module').then(m => m.StudentModule),
    canActivate: [AuthGuard],
    data: { role: 'Student' }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
