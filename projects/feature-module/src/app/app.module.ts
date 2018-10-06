import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { appRouting } from './app.routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CoreModule } from '../../../core/src/public_api';
import { MatStepperModule, MatCardModule, MatFormFieldModule, MatError, MatDatepickerModule, MatSelectModule, MatOptionModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    MatStepperModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
