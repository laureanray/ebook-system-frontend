import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import { BookManagerComponent } from './components/book-manager/book-manager.component';
import {SidebarNavComponent} from './components/sidebar-nav/sidebar-nav.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddBookComponent } from './components/add-book/add-book.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { BookDescriptionComponent } from './components/book-description/book-description.component';
import { BookItemCardComponent } from './components/book-manager/book-item-card/book-item-card.component';
import { BookSidebarComponent } from './components/book-sidebar/book-sidebar.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookEditorComponent } from './components/book-editor/book-editor.component';
import {UserAccountsComponent} from './components/user-accounts/user-accounts.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AdminComponent,
    BookManagerComponent,
    SidebarNavComponent,
    AddBookComponent,
    BookDescriptionComponent,
    BookItemCardComponent,
    BookSidebarComponent,
    BookDetailsComponent,
    BookEditorComponent,
    UserAccountsComponent
  ],
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
    MatTreeModule,
    MatRadioModule,
    MatTableModule,
    MatExpansionModule,
    MatRadioModule,
    FormsModule,
    MatMenuModule,
    MatCardModule,
  ]
})
export class AdminModule { }
