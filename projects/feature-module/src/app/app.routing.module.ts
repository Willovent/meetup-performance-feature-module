import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'back-office',
    loadChildren: '../../../back-office/src/lib/back-office.module#BackOfficeModule'
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
