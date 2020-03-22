import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserAccountsComponent} from './user-accounts/user-accounts.component';
import {AdminComponent} from './components/admin/admin.component';
import {BookManagerComponent} from './components/book-manager/book-manager.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {BookDescriptionComponent} from './components/book-description/book-description.component';

const routes: Routes = [
  {path: '', redirectTo: 'book-manager'},
  { path: '',
    component: AdminComponent,
    children: [
      { path: 'book-manager', component: BookManagerComponent},
      { path: 'add-book', component: AddBookComponent},
      { path: 'book/:id', component: BookDescriptionComponent},
      { path: 'user-accounts', component: UserAccountsComponent}
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
