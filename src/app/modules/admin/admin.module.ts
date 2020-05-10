import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './components/admin/admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {BookManagerComponent} from './components/book-manager/book-manager.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectedBookComponent} from './components/selected-book/selected-book.component';
import {BookItemCardComponent} from './components/book-manager/book-item-card/book-item-card.component';
import {SelectedBookEditorComponent} from './components/selected-book/selected-book-editor/selected-book-editor.component';
import {UserAccountsComponent} from './components/user-accounts/user-accounts.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {AccountSettingsComponent} from './components/account-settings/account-settings.component';
import {SectionAssignmentComponent} from './components/section-assignment/section-assignment.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {AddTopicModalComponent} from './components/selected-book/selected-book-sidebar/add-topic-modal/add-topic-modal.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {SelectedBookSidebarComponent} from './components/selected-book/selected-book-sidebar/selected-book-sidebar.component';
import {SelectedBookDetailsComponent} from './components/selected-book/selected-book-details/selected-book-details.component';
import {SharedModule} from '../../shared/shared.module';
import {DeleteModalComponent} from './components/selected-book/selected-book-editor/delete-modal/delete-modal.component';
import {SelectedBookAddExamComponent} from './components/selected-book/selected-book-add-exam/selected-book-add-exam.component';
import {RemoveAccessModalComponent} from './components/selected-book/selected-book-details/remove-access-modal/remove-access-modal.component';
import {MaterialModule} from '../material.module';
import { DeleteChapterModalComponent } from './components/selected-book/selected-book-editor/delete-chapter-modal/delete-chapter-modal.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AdminComponent,
    BookManagerComponent,
    AddBookComponent,
    SelectedBookComponent,
    BookItemCardComponent,
    SelectedBookDetailsComponent,
    SelectedBookSidebarComponent,
    SelectedBookEditorComponent,
    UserAccountsComponent,
    AddUserComponent,
    AccountSettingsComponent,
    SectionAssignmentComponent,
    AddTopicModalComponent,
    DeleteModalComponent,
    SelectedBookAddExamComponent,
    RemoveAccessModalComponent,
    DeleteChapterModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularEditorModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    SharedModule,
    MaterialModule,
    FontAwesomeModule
  ]
})
export class AdminModule {
}
