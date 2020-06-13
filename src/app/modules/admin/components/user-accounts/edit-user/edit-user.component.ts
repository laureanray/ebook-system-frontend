import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../../../core/services/student.service';
import {InstructorService} from '../../../../../core/services/instructor.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {
  type: string;
  id: number;

  constructor(private studentService: StudentService,
              private instructorService: InstructorService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
  }

  ngOnInit(): void {
  }

}
