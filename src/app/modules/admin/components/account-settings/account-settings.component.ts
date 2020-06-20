import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../../core/services/admin.service';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {User} from '../../../../core/models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.sass']
})
export class AccountSettingsComponent implements OnInit {
  isDisabled = true;
  newPassword: string;
  confirm: string;

  constructor(private adminService: AdminService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }


  update() {
    if (this.newPassword === this.confirm) {
      this.isDisabled = false;
    }
  }

  updatePass() {
    this.isDisabled = true;
    this.authService.currentUser.subscribe((admin: User) => {
      this.adminService.updatePassword(this.newPassword, admin.id).subscribe((res) => {
        this.isDisabled = false;
        alert('You will be logged out, please login with your new password.');
        this.authService.logout();
        this.router.navigate(['/']);
      });
    });

  }
}
