import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CompileTask} from '../models/compiletask';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {
  constructor(private http: HttpClient) { }

  compile(compileTask: CompileTask) {
    return this.http
      .post(`${environment.apiUrl}/cppcompiler/compile`, compileTask);
  }

}
