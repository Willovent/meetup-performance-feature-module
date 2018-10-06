import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    },
    pathMatch: 'full'
  },
  {
    path: '',
    outlet: 'menu',
    component: SidenavComponent,
    pathMatch: 'full'
  },

  {
    path: 'back-office',
    loadChildren: '../../../back-office/src/lib/back-office.module#BackOfficeModule',
    data: {
      title: 'BackOffice'
    }
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
