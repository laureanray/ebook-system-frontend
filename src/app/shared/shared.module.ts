import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [NotFoundComponent, LogoutModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
