import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: SidenavComponent,
    outlet: 'menu',
    pathMatch: 'full'
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forChild(routes);
