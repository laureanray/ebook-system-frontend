import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserAccountsComponent} from './components/user-accounts/user-accounts.component';
import {AdminComponent} from './components/admin/admin.component';
import {BookManagerComponent} from './components/book-manager/book-manager.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {BookDescriptionComponent} from './components/book-description/book-description.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {AccountSettingsComponent} from './components/account-settings/account-settings.component';

const routes: Routes = [
  {path: '', redirectTo: 'book-manager'},
  { path: '',
    component: AdminComponent,
    children: [
      { path: 'book-manager', component: BookManagerComponent},
      { path: 'add-book', component: AddBookComponent},
      { path: 'book/:id', component: BookDescriptionComponent},
      { path: 'user-accounts', component: UserAccountsComponent},
      { path: 'add-user', component: AddUserComponent},
      { path: 'account-settings', component: AccountSettingsComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
