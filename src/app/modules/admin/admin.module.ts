import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './components/admin/admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {BookManagerComponent} from './components/book-manager/book-manager.component';
import {SidebarNavComponent} from './components/sidebar-nav/sidebar-nav.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AddBookComponent} from './components/add-book/add-book.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {SelectedBookComponent} from './components/selected-book/selected-book.component';
import {BookItemCardComponent} from './components/book-manager/book-item-card/book-item-card.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {SelectedBookEditorComponent} from './components/selected-book/selected-book-editor/selected-book-editor.component';
import {UserAccountsComponent} from './components/user-accounts/user-accounts.component';
import {MatCardModule} from '@angular/material/card';
import {AddUserComponent} from './components/add-user/add-user.component';
import {AccountSettingsComponent} from './components/account-settings/account-settings.component';
import {SectionAssignmentComponent} from './components/section-assignment/section-assignment.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {AddTopicModalComponent} from './components/selected-book/selected-book-sidebar/add-topic-modal/add-topic-modal.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {SelectedBookSidebarComponent} from './components/selected-book/selected-book-sidebar/selected-book-sidebar.component';
import {SelectedBookDetailsComponent} from './components/selected-book/selected-book-details/selected-book-details.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    BookManagerComponent,
    SidebarNavComponent,
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
    AddTopicModalComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        AngularEditorModule,
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
        CKEditorModule,
        SharedModule
    ]
})
export class AdminModule {
}
