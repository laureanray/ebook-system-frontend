import { Component, OnInit } from '@angular/core';
import {CodeModel} from '@ngstack/code-editor';
import {CompilerService} from '../../../../core/services/compiler.service';
import {Subscription} from 'rxjs';
import {CompileTask} from '../../../../core/models/compiletask';

@Component({
  selector: 'app-coding-playground',
  templateUrl: './coding-playground.component.html',
  styleUrls: ['./coding-playground.component.sass']
})
export class CodingPlaygroundComponent implements OnInit {
  theme = 'vs';
  compileSub: Subscription;
  codeModel: CodeModel = {
    language: 'cpp',
    uri: 'main.json',
    value: `#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}`
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: false
    }
  };
  output = '';
  isRunning = false;
  error = '';

  constructor(private compilerService: CompilerService) { }

  ngOnInit(): void {
  }

  runCode() {
    this.isRunning = true;
    const compileTask = new CompileTask();
    compileTask.source = this.codeModel.value;
    this.compileSub = this.compilerService.compile(compileTask).subscribe((ct: CompileTask) => {
      console.log(ct);
      if (ct.compileError) {
        this.error = ct.compileError;
        this.output = '';
      }
      if (ct.runtimeError) {
        this.error = ct.runtimeError;
        this.output = '';
      }
      if (ct.output) {
        this.output = ct.output;
        this.error = '';
      }
      this.isRunning = false;
    }, error => {
      this.error = error;
      this.isRunning = false;
    });
  }
}
