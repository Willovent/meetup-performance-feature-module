import { NgModule } from '@angular/core';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule
  ],
  declarations: [],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class CoreModule { }
