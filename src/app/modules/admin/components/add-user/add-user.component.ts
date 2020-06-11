import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormFieldControlHarness} from '@angular/material/form-field/testing';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {
  public showStudent = true;
  public showFaculty = false;
  constructor() {  }
  ngOnInit() {  }
  toggleStudent() {
    this.showStudent = true;
    this.showFaculty = false;
  }
  toggleFaculty() {
    this.showStudent = false;
    this.showFaculty = true;
  }
}
