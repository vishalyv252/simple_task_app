import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '**', component: NotFoundPageComponent }
];
