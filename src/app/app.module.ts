import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'; 
import { AppRoutingModule } from './/app-routing.module';

import {
  MatSnackBarModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule, 
  MatCardModule, 
  MatInputModule,
  MatNativeDateModule,
  MatMenuModule,
} from '@angular/material';

// Services
import { GeneralService } from './services/general/general.service'; 
import { SignupComponent } from './components/signup/signup.component';
 
@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent, 
  ],
  entryComponents:  [],
  imports: [
    FormsModule,
    BrowserModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule, 
    MatInputModule, 
    MatNativeDateModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [ 
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
