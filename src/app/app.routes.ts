import { Routes } from '@angular/router';
import { HomeComponent } from './webpage/home/home.component';
import { ProfileComponent } from './webpage/profile/profile.component';
import { VacationComponent } from './webpage/vacation/vacation.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'vacation', component: VacationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
]
