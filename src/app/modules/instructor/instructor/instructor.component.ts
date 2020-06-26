import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {Instructor} from '../../../core/models/instructor';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.sass']
})
export class InstructorComponent implements OnInit {



  ngOnInit(): void {
  }

}
