import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {StudentLoginComponent} from './student-login/student-login.component';
import {InstructorAdminLoginComponent} from './instructor-admin-login/instructor-admin-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {JwtInterceptor} from '../../core/authentication/jwt.interceptor';
import {MaterialModule} from '../material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentLoginComponent,
    InstructorAdminLoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
