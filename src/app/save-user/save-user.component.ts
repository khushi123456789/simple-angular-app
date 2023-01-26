import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-save-user',
  template: `
  <form [formGroup]="userForm" (ngSubmit)="submitForm()">
    <label>
      Name:
      <input type="text" formControlName="name">
    </label>
    <br>
    <label>
      Job:
      <input type="text" formControlName="job">
    </label>
    <br>
    <button type="submit">Submit</button>
    <div *ngIf="message" class="message">{{message}}</div>
    </form>
      `
    })
    
    export class SaveUserComponent implements OnInit {
      userForm = new FormGroup({
        name: new FormControl(''),
        job: new FormControl('')
      });
      message!: string;
      constructor(private http: HttpClient) { }
    
      ngOnInit() { }
    
      submitForm() {
        this.http.post('https://reqres.in/api/users', this.userForm.value)
          .subscribe(data => {
            this.message = "User saved successfully";
          });
      }
    }
    