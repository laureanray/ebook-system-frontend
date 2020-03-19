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



@NgModule({
  declarations: [AdminComponent, BookManagerComponent, SidebarNavComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class AdminModule { }
