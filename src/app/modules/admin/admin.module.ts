import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { BookManagerComponent } from './book-manager/book-manager.component';



@NgModule({
  declarations: [AdminComponent, BookManagerComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
