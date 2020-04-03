import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserAccountsComponent} from './components/user-accounts/user-accounts.component';
import {AdminComponent} from './components/admin/admin.component';
import {BookManagerComponent} from './components/book-manager/book-manager.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {SelectedBookComponent} from './components/selected-book/selected-book.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {AccountSettingsComponent} from './components/account-settings/account-settings.component';
import {SectionAssignmentComponent} from './components/section-assignment/section-assignment.component';
import {SelectedBookDetailsComponent} from './components/selected-book/selected-book-details/selected-book-details.component';
import {SelectedBookAddExamComponent} from './components/selected-book/selected-book-add-exam/selected-book-add-exam.component';
import {SelectedBookEditorComponent} from './components/selected-book/selected-book-editor/selected-book-editor.component';

const routes: Routes = [
  {path: '', redirectTo: 'book-manager'},
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'book-manager', component: BookManagerComponent},
      {path: 'add-book', component: AddBookComponent},
      {
        path: 'book/:id', component: SelectedBookComponent,
        children: [
          {path: '', redirectTo: 'details'},
          {path: 'details', component: SelectedBookDetailsComponent},
          {path: 'add-exam', component: SelectedBookAddExamComponent},
          {path: 'editor', component: SelectedBookEditorComponent}
        ]
      },
      {path: 'user-accounts', component: UserAccountsComponent},
      {path: 'add-user', component: AddUserComponent},
      {path: 'account-settings', component: AccountSettingsComponent},
      {path: 'section-assignment', component: SectionAssignmentComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
