import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { appRouting } from './back-office.routing.module';

@NgModule({
  imports: [
    appRouting
  ],
  declarations: [HomeComponent],
  exports: []
})
export class BackOfficeModule { }
