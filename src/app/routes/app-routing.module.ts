import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../ui/layout/layout.component';
import { ProfileComponent } from '../ui/profile/profile.component'
import { MediaComponent } from '../ui/media/media.component';
import { HomeComponent } from '../ui/home/home.component';
import { SignupLoginComponent } from '../ui/signup-login/signup-login.component';
import { UserListComponent } from '../ui/user-list/user-list.component';
import { UserComponent } from '../ui/user/user.component';

const routes: Routes = [
  { path: 'layout/:page', component: LayoutComponent },
  { path: 'profile/:page', component: ProfileComponent },
  { path: 'media/:page', component: MediaComponent },
  { path: 'auth/:page', component: SignupLoginComponent },
  // { path: '/', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '', component: HomeComponent }  // this will load by default

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LayoutComponent, ProfileComponent, MediaComponent, UserComponent, UserListComponent, SignupLoginComponent]