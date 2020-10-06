import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { firebasebDBenv } from 'src/environments/firebase-config';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RegistrationService } from './service/registration.service';
import { UserService } from './service/user.service';
import { MediaService } from './service/media.service';


import { AppComponent } from './app.component';
import { routingComponents, AppRoutingModule } from './routes/app-routing.module';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { ProfileComponent } from './ui/profile/profile.component';
import { ProfiledataComponent } from './ui/profiledata/profiledata.component';
import { MediaComponent } from './ui/media/media.component';
import { HomeComponent } from './ui/home/home.component';
import { SignupLoginComponent } from './ui/signup-login/signup-login.component';
import { UserListComponent } from './ui/user-list/user-list.component';
import { UserComponent } from './ui/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    ProfiledataComponent,
    MediaComponent,
    routingComponents,
    HomeComponent,
    SignupLoginComponent,
    UserListComponent,
    UserComponent
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebasebDBenv.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [RegistrationService,UserService,MediaService],
  bootstrap: [AppComponent]
})

export class AppModule { }
