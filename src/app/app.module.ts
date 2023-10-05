import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { FormsModule} from '@angular/forms';
import { StudentsComponent } from './shared/components/students/students.component';
import { TeachersComponent } from './shared/components/teachers/teachers.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AuthComponent,
    StudentsComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
