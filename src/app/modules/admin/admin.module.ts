import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { BookManagerComponent } from './book-manager/book-manager.component';
import {SidebarNavComponent} from "./sidebar-nav/sidebar-nav.component";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { AddBookComponent } from './add-book/add-book.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import { BookDescriptionComponent } from './book-description/book-description.component';
import { BookItemCardComponent } from './book-manager/book-item-card/book-item-card.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [AdminComponent, BookManagerComponent, SidebarNavComponent, AddBookComponent, BookDescriptionComponent, BookItemCardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
  ]
})
export class AdminModule { }
