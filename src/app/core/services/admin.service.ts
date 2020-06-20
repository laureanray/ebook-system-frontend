import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdmin(id: number) {
    return this.http
      .get(`${environment.apiUrl}/admin/${id}`);
  }

  updatePassword(newPassword: string, adminId: number) {
    return this.http
      .post(`${environment.apiUrl}/admin/update-password/${adminId}/${newPassword}`, {
        newPassword
      });
  }
}
