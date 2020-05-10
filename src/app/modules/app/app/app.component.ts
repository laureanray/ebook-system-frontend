import { Component } from '@angular/core';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import {LogoutModalComponent} from '../../../shared/logout-modal/logout-modal.component';
import {User} from '../../../core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ebook-system-frontend';
  isLoggedIn = false;
  user: User;

  constructor(
    private authenticationService: AuthenticationService,
    public dialog: MatDialog
    ) {
    this.authenticationService.currentUser.subscribe((user: User) => {
        this.isLoggedIn = !!user;
        if (user) {
          this.user = user;
        }
    });
  }

  logout() {
      const dialogRef = this.dialog.open(LogoutModalComponent, {
        width: '300px'
      });

      dialogRef.afterClosed().subscribe(res => {
        console.log(res);
      });
  }
}
