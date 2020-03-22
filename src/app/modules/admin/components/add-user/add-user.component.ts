import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {
  public showStudent = true;
  public showFaculty = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleStudent() {
    this.showStudent = true;
    this.showFaculty = false;
  }
  toggleFaculty() {
    this.showStudent = false;
    this.showFaculty = true;
  }
}
