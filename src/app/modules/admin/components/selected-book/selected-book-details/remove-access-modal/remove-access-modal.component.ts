import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-remove-access-modal',
  templateUrl: './remove-access-modal.component.html',
  styleUrls: ['./remove-access-modal.component.sass']
})
export class RemoveAccessModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RemoveAccessModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
