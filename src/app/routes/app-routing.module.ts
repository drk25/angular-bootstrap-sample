import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../ui/layout/layout.component';
import { ProfileComponent } from '../ui/profile/profile.component'
import { MediaComponent } from '../ui/media/media.component';
import { HomeComponent } from '../ui/home/home.component';


const routes: Routes = [
  { path: 'layout/:page', component: LayoutComponent},
  { path: 'profile/:page', component: ProfileComponent},
  { path: 'media', component: MediaComponent},

  // { path: '/', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }  // this will load by default

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LayoutComponent, ProfileComponent, MediaComponent]