import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-topic-modal',
  templateUrl: './add-topic-modal.component.html',
  styleUrls: ['./add-topic-modal.component.sass']
})
export class AddTopicModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddTopicModalComponent>) {}

    ngOnInit(): void {
    }

}
