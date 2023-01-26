import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SaveUserComponent } from './save-user/save-user.component';
import {HttpClientModule} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SaveUserComponent,
      MatTableModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
