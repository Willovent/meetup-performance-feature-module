import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { appRouting } from './back-office.routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CoreModule } from '../../../core/src/public_api';
import { NgxEchartsModule } from 'ngx-echarts';
import 'echarts';

@NgModule({
  imports: [
    appRouting,
    CoreModule,
    NgxEchartsModule
  ],
  declarations: [HomeComponent, SidenavComponent],
  exports: []
})
export class BackOfficeModule { }
