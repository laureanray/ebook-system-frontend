import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {BookManagerComponent} from './book-manager/book-manager.component';
import {AddBookComponent} from './add-book/add-book.component';

const routes: Routes = [
  {path: '', redirectTo: 'book-manager'},
  { path: '',
    component: AdminComponent,
    children: [
      { path: 'book-manager', component: BookManagerComponent},
      { path: 'add-book', component: AddBookComponent}
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
